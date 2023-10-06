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
import type { IMenuItem } from '@smile/react-front-kit/src/Components/SidebarMenu/types';
import type { IFlattenedObject } from '@smile/react-front-kit/src/helpers';
import type { ReactElement } from 'react';

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
import { flatten, removeChildrenOf } from '@smile/react-front-kit/src/helpers';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { SortableMenuItem } from './MenuItem/SortableMenuItem';
import { sortableTreeKeyboardCoordinates } from './keyboardCoordinates';
import {
  buildTree,
  getChildCount,
  getProjection,
  removeItem,
  setProperty,
} from './utilities';

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
    y: transform.y - 25,
  };
};

interface ISortableSidebarMenuProps {
  collapsible?: boolean;
  indentationWidth?: number;
  indicator?: boolean;
  menu: IMenuItem[];
  removable?: boolean;
}

export function SortableSidebarMenu(
  props: ISortableSidebarMenuProps,
): ReactElement {
  const {
    collapsible,
    menu,
    indicator = false,
    indentationWidth = 50,
    removable,
  } = props;
  const [items, setItems] = useState(() => menu);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [overId, setOverId] = useState<UniqueIdentifier | null>(null);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [currentPosition, setCurrentPosition] = useState<{
    overId: UniqueIdentifier;
    parentId: UniqueIdentifier | null;
  } | null>(null);

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

    if (projected && over) {
      const { depth, parentId } = projected;
      const clonedItems: IFlattenedObject<IMenuItem>[] = JSON.parse(
        JSON.stringify(flatten(items)),
      ) as IFlattenedObject<IMenuItem>[];
      const overIndex = clonedItems.findIndex(({ id }) => id === over.id);
      const activeIndex = clonedItems.findIndex(({ id }) => id === active.id);
      const activeTreeItem = clonedItems[activeIndex];

      clonedItems[activeIndex] = { ...activeTreeItem, depth, parentId };

      const sortedItems = arrayMove(clonedItems, activeIndex, overIndex);
      const newItems = buildTree(sortedItems);
      setItems(newItems);
    }
  }

  function handleDragCancel(): void {
    resetState();
  }

  function handleRemove(id: UniqueIdentifier): void {
    setItems((items) => removeItem(items, id));
  }

  function handleCollapse(id: UniqueIdentifier): void {
    setItems((items) =>
      setProperty(items, id, 'collapsed', (value) => {
        return !value;
      }),
    );
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

    const clonedItems: IFlattenedObject<IMenuItem>[] = JSON.parse(
      JSON.stringify(flatten(items)),
    ) as IFlattenedObject<IMenuItem>[];
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
      let previousSibling: IFlattenedObject<IMenuItem> | undefined =
        previousItem;
      while (previousSibling && projected.depth < previousSibling.depth) {
        const parentId = previousSibling.parentId as UniqueIdentifier;
        previousSibling = sortedItems.find(({ id }) => id === parentId);
      }

      if (previousSibling) {
        announcement = `${activeId} was ${movedVerb} after ${previousSibling.id}.`;
      }
    }

    return announcement;
  }

  const flattenedItems = useMemo(() => {
    const flattenedTree = flatten(items);
    const collapsedItems = flattenedTree.reduce<string[]>(
      (acc, { children, collapsed, id }) =>
        collapsed && children?.length ? [...acc, id.toString()] : acc,
      [],
    );

    return removeChildrenOf(
      flattenedTree,
      activeId ? [activeId, ...collapsedItems] : collapsedItems,
    );
  }, [activeId, items]);
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

  const sortedIds = useMemo(
    () => flattenedItems.map(({ id }) => id),
    [flattenedItems],
  );
  const activeItem = activeId
    ? flattenedItems.find(({ id }) => id === activeId)
    : null;

  useEffect(() => {
    sensorContext.current = {
      items: flattenedItems,
      offset: offsetLeft,
    };
  }, [flattenedItems, offsetLeft]);

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
        {flattenedItems.map(({ id, label, children, collapsed, depth }) => (
          <SortableMenuItem
            key={id}
            collapsed={Boolean(collapsed && children?.length)}
            depth={id === activeId && projected ? projected.depth : depth}
            id={id}
            indentationWidth={indentationWidth}
            indicator={indicator}
            label={label?.toString() ?? ''}
            onCollapse={
              collapsible && children?.length
                ? () => handleCollapse(id)
                : undefined
            }
            onRemove={removable ? () => handleRemove(id) : undefined}
          />
        ))}
        {createPortal(
          <DragOverlay
            dropAnimation={dropAnimationConfig}
            modifiers={indicator ? [adjustTranslate] : undefined}
          >
            {activeId !== null &&
              activeItem !== null &&
              activeItem !== undefined && (
                <SortableMenuItem
                  childCount={getChildCount(items, activeId) + 1}
                  clone
                  depth={activeItem.depth}
                  id={activeId}
                  indentationWidth={indentationWidth}
                  label={activeItem.label?.toString() ?? ''}
                />
              )}
          </DragOverlay>,
          document.body,
        )}
      </SortableContext>
    </DndContext>
  );
}
