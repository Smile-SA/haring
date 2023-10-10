import type { ISensorContext } from './types';
import type {
  Announcements,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragStartEvent,
  DropAnimation,
  Modifier,
  UniqueIdentifier,
} from '@dnd-kit/core';
import type { ISidebarMenuControlledProps } from '@smile/react-front-kit/src/Components/SidebarMenu/SidebarMenuControlled';
import type { IMenuItem } from '@smile/react-front-kit/src/Components/SidebarMenu/types';
import type {
  INestedObjectInfo,
  IUniqueIdentifier,
} from '@smile/react-front-kit/src/helpers';
import type { ReactElement, ReactNode } from 'react';

import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MeasuringStrategy,
  PointerSensor,
  closestCenter,
  defaultDropAnimation,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  addInfo,
  flatten,
  removeChildrenOf,
} from '@smile/react-front-kit/src/helpers';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { SortableMenuItem } from './MenuItem/SortableMenuItem';
import { sortableTreeKeyboardCoordinates } from './keyboardCoordinates';
import { buildTree, getChildCount, getProjection } from './utilities';

const measuring = {
  droppable: {
    strategy: MeasuringStrategy.Always,
  },
};

const dropAnimationConfig: DropAnimation = {
  easing: 'ease-out',
  keyframes({ transform }) {
    return [
      { opacity: 1, transform: CSS.Transform.toString(transform.initial) },
      {
        opacity: 0,
        transform: CSS.Transform.toString({
          ...transform.final,
          x: transform.final.x + 5,
          y: transform.final.y + 5,
        }),
      },
    ];
  },
  sideEffects({ active }) {
    active.node.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: defaultDropAnimation.duration,
      easing: defaultDropAnimation.easing,
    });
  },
};

const adjustTranslate: Modifier = ({ transform }) => {
  return {
    ...transform,
    // y: transform.y - 25, // TODO: adjust?
    y: transform.y,
  };
};

interface ISortableSidebarMenuProps extends ISidebarMenuControlledProps {
  indentationWidth?: number;
  indicator?: boolean;
  menu: IMenuItem[];
}

export function SortableSidebarMenu(
  props: ISortableSidebarMenuProps,
): ReactElement {
  const {
    menu,
    hasOnlyOneOpenMenu = false,
    indicator = false,
    indentationWidth = 50,
    onCollapseChange,
    onSelectedChange,
    openedMenuIds = [],
    selectedId,
  } = props;
  const [items, setItems] = useState(() => menu);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [overId, setOverId] = useState<UniqueIdentifier | null>(null);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [currentPosition, setCurrentPosition] = useState<{
    overId: UniqueIdentifier;
    parentId: UniqueIdentifier | null;
  } | null>(null);

  const flattenedItems = useMemo(() => {
    const flattenedTree = flatten<IMenuItem>(items);
    const collapsedItems = flattenedTree.reduce<string[]>(
      (acc, { children, id }) =>
        openedMenuIds.includes(id) && children?.length
          ? [...acc, id.toString()]
          : acc,
      [],
    );
    return removeChildrenOf(
      flattenedTree,
      activeId ? [activeId, ...collapsedItems] : collapsedItems,
    );
  }, [activeId, items, openedMenuIds]);
  const sortedIds = useMemo(() => items.map(({ id }) => id), [items]);
  const activeItem: INestedObjectInfo<IMenuItem> | null | undefined = activeId
    ? flattenedItems.find(({ id }) => id === activeId)
    : null;
  const projected =
    activeId && overId
      ? getProjection(
          flattenedItems,
          activeId,
          overId,
          offsetLeft,
          indentationWidth,
        )
      : null;

  const sensorContext: ISensorContext = useRef({
    items: flattenedItems,
    offset: offsetLeft,
  });
  // eslint-disable-next-line react/hook-use-state
  const [coordinateGetter] = useState(() =>
    sortableTreeKeyboardCoordinates(sensorContext, indicator, indentationWidth),
  );
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter,
    }),
  );

  function handleDragStart({ active: { id: activeId } }: DragStartEvent): void {
    setActiveId(activeId);
    setOverId(activeId);

    const activeItem = flattenedItems.find(({ id }) => id === activeId);

    if (activeItem) {
      setCurrentPosition({
        overId: activeId,
        parentId: activeItem.parentId,
      });
    }

    document.body.style.setProperty('cursor', 'grabbing');
  }

  function handleDragMove({ delta }: DragMoveEvent): void {
    setOffsetLeft(delta.x);
  }

  function handleDragOver({ over }: DragOverEvent): void {
    setOverId(over?.id ?? null);
  }

  function resetState(): void {
    setOverId(null);
    setActiveId(null);
    setOffsetLeft(0);
    setCurrentPosition(null);

    document.body.style.setProperty('cursor', '');
  }

  function handleDragEnd({ active, over }: DragEndEvent): void {
    resetState();

    console.log(items);
    if (projected && over) {
      const { depth, parentId } = projected;
      const clonedItems = [...flatten(items)];
      const overIndex = clonedItems.findIndex(({ id }) => id === over.id);
      const activeIndex = clonedItems.findIndex(({ id }) => id === active.id);
      const activeTreeItem = clonedItems[activeIndex];

      clonedItems[activeIndex] = { ...activeTreeItem, depth, parentId };

      const sortedItems = arrayMove(clonedItems, activeIndex, overIndex);
      const newItems = buildTree(sortedItems);
      console.log(newItems);
      setItems(newItems);
    }
  }

  function handleDragCancel(): void {
    resetState();
  }

  function getMovementAnnouncement(
    eventName: string,
    activeId: UniqueIdentifier,
    overId?: UniqueIdentifier,
  ): string | undefined {
    if (!(overId && projected)) {
      return undefined;
    }
    if (eventName !== 'onDragEnd') {
      if (
        currentPosition &&
        projected.parentId === currentPosition.parentId &&
        overId === currentPosition.overId
      ) {
        return undefined;
      }
      setCurrentPosition({
        overId,
        parentId: projected.parentId,
      });
    }

    const clonedItems = [...flatten(items)];
    const overIndex = clonedItems.findIndex(({ id }) => id === overId);
    const activeIndex = clonedItems.findIndex(({ id }) => id === activeId);
    const sortedItems = arrayMove(clonedItems, activeIndex, overIndex);

    const previousItem = sortedItems[overIndex - 1];

    let announcement;
    const movedVerb = eventName === 'onDragEnd' ? 'dropped' : 'moved';
    const nestedVerb = eventName === 'onDragEnd' ? 'dropped' : 'nested';

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!previousItem) {
      const nextItem = sortedItems[overIndex + 1];
      announcement = `${activeId} was ${movedVerb} before ${nextItem.id}.`;
    } else if (projected.depth > previousItem.depth) {
      announcement = `${activeId} was ${nestedVerb} under ${previousItem.id}.`;
    } else {
      let previousSibling: INestedObjectInfo<IMenuItem> | undefined =
        previousItem;
      while (previousSibling && projected.depth < previousSibling.depth) {
        const parentId = previousSibling.parentId as UniqueIdentifier;
        previousSibling = sortedItems.find(({ id }) => id === parentId);
      }

      if (previousSibling) {
        announcement = `${activeId} was ${movedVerb} after ${previousSibling.id}.`;
      }
    }

    console.log(announcement);
    return announcement;
  }

  const announcements: Announcements = {
    onDragCancel({ active }) {
      return `Moving was cancelled. ${active.id} was dropped in its original position.`;
    },
    onDragEnd({ active, over }) {
      return getMovementAnnouncement('onDragEnd', active.id, over?.id);
    },
    onDragMove({ active, over }) {
      return getMovementAnnouncement('onDragMove', active.id, over?.id);
    },
    onDragOver({ active, over }) {
      return getMovementAnnouncement('onDragOver', active.id, over?.id);
    },
    onDragStart({ active }) {
      return `Picked up ${active.id}.`;
    },
  };

  function handleCollapseChange(
    menuId: IUniqueIdentifier,
    isOpened: boolean,
  ): void {
    if (hasOnlyOneOpenMenu && isOpened) {
      /** Flatten and add calculated path property to the entire nested array of menus,
       * keep only the path from the menu being clicked **/
      const openedMenuPath = flatten<IMenuItem>(menu).find(
        (menu) => menu.id === menuId,
      )?.path;
      onCollapseChange?.(openedMenuPath ?? []);
    } else {
      /** Add or remove id being clicked **/
      onCollapseChange?.(
        openedMenuIds.includes(menuId)
          ? openedMenuIds.filter((id) => id !== menuId)
          : openedMenuIds.concat(menuId),
      );
    }
  }

  function getRecursiveMenu(
    onCollapseChange: (id: IUniqueIdentifier, isOpened: boolean) => void,
    onSelectChange: (id?: IUniqueIdentifier) => void,
    openedMenuIds: IUniqueIdentifier[],
    menu?: IMenuItem[],
    selectedId?: IUniqueIdentifier,
    level = 0,
  ): ReactElement[] | null {
    if (!menu) {
      return null;
    }
    return addInfo(menu, level).map(
      ({
        id,
        depth,
        label,
        children,
        parentId,
        index,
        path,
        ...buttonProps
      }) => {
        const localSortedIds = menu.map((item) => item.id);
        return (
          <SortableMenuItem
            key={id}
            collapsed={!openedMenuIds.includes(id) || id === activeId}
            id={id}
            isCollapsible={Boolean(children?.length && children.length > 0)}
            isOpenOnSelect
            label={label ?? ''}
            level={id === activeId && projected ? projected.depth : depth}
            line={depth === 0}
            onCollapseChange={(isOpened) => onCollapseChange(id, isOpened)}
            onSelect={onSelectChange}
            selected={selectedId === id}
            {...buttonProps}
            // indentationWidth={indentationWidth}
            // indicator={indicator}
          >
            <SortableContext
              items={localSortedIds}
              strategy={verticalListSortingStrategy}
            >
              {getRecursiveMenu(
                onCollapseChange,
                onSelectChange,
                openedMenuIds,
                children,
                selectedId,
                level + 1,
              )}
            </SortableContext>
          </SortableMenuItem>
        );
      },
    );
  }

  function getDragMenu(item: INestedObjectInfo<IMenuItem>): ReactNode {
    const {
      id,
      label,
      depth,
      children,
      parentId,
      index,
      path,
      ...buttonProps
    } = item;
    return (
      <SortableMenuItem
        childCount={getChildCount(items, id) + 1}
        clone
        id={id}
        label={label?.toString() ?? ''}
        level={depth}
        {...buttonProps}
      />
    );
  }

  useEffect(() => {
    sensorContext.current = {
      items: flattenedItems,
      offset: offsetLeft,
    };
  }, [flattenedItems, offsetLeft]);

  return (
    <DndContext
      accessibility={{ announcements }}
      collisionDetection={closestCenter}
      measuring={measuring}
      onDragCancel={handleDragCancel}
      onDragEnd={handleDragEnd}
      onDragMove={handleDragMove}
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
      sensors={sensors}
    >
      <SortableContext items={sortedIds} strategy={verticalListSortingStrategy}>
        {getRecursiveMenu(
          (id, isOpened) =>
            onCollapseChange && handleCollapseChange(id, isOpened),
          (id) => onSelectedChange && onSelectedChange(id),
          openedMenuIds,
          items,
          selectedId,
        )}
        {createPortal(
          <DragOverlay
            dropAnimation={dropAnimationConfig}
            modifiers={indicator ? [adjustTranslate] : undefined}
          >
            {activeId !== null &&
              activeItem !== null &&
              activeItem !== undefined &&
              getDragMenu(activeItem)}
          </DragOverlay>,
          document.body,
        )}
      </SortableContext>
    </DndContext>
  );
}
