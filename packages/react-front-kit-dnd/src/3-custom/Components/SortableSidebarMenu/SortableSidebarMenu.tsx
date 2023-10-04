'use client';

import type {
  DndContextProps,
  DragStartEvent,
  DropAnimation,
  Modifier,
  UniqueIdentifier,
} from '@dnd-kit/core';
import type { ISidebarMenuProps } from '@smile/react-front-kit/src';
import type { ReactElement } from 'react';

import {
  DndContext,
  DragOverlay,
  MeasuringStrategy,
  closestCenter,
  defaultDropAnimation,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { SidebarMenuControlled } from '@smile/react-front-kit/src/Components/SidebarMenu/SidebarMenuControlled';
import { flattenNestedObjects } from '@smile/react-front-kit/src/helpers';
import { useState } from 'react';
import { createPortal } from 'react-dom';

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

interface ISortableSidebarMenuProps extends ISidebarMenuProps {
  /** */
  collapsible?: boolean;
  /** */
  dragAndDropProps?: DndContextProps;
  /** */
  indicator?: boolean;
}

/** */
export function SortableSidebarMenu(
  props: ISortableSidebarMenuProps,
): ReactElement {
  const { indicator, dragAndDropProps, ...sidebarMenuProps } = props;
  const flattenedMenus = flattenNestedObjects(sidebarMenuProps.menu);
  const menuIds = flattenNestedObjects(sidebarMenuProps.menu).map(
    (menu) => menu.id,
  );
  const [openedIds, setOpenedIds] = useState(
    sidebarMenuProps.initialOpenedMenuIds,
  );
  const [selectedId, setSelectedId] = useState<number | string>();
  const [draggedId, setDraggedId] = useState<UniqueIdentifier | null>(null);
  const draggedItem = flattenedMenus.find((item) => item.id === draggedId);

  function resetState(): void {
    // setOverId(null);
    setDraggedId(null);
    // setOffsetLeft(0);
    // setCurrentPosition(null);
    //
    // document.body.style.setProperty('cursor', '');
  }

  function handleDragStart({ active: { id: activeId } }: DragStartEvent): void {
    setDraggedId(activeId);
    // setOverId(activeId);

    // const activeItem = flattenedItems.find(({ id }) => id === activeId);
    //
    // if (activeItem) {
    //   setCurrentPosition({
    //     overId: activeId,
    //     parentId: activeItem.parentId,
    //   });
    // }
    //
    // document.body.style.setProperty('cursor', 'grabbing');
  }

  function handleDragCancel(): void {
    resetState();
  }

  return (
    <DndContext
      // accessibility={{ announcements }}
      collisionDetection={closestCenter}
      measuring={measuring}
      onDragCancel={handleDragCancel}
      // onDragEnd={handleDragEnd}
      // onDragMove={handleDragMove}
      // onDragOver={handleDragOver}
      onDragStart={handleDragStart}
      // sensors={sensors}
      {...dragAndDropProps}
    >
      <SortableContext items={menuIds} strategy={verticalListSortingStrategy}>
        <SidebarMenuControlled
          onCollapseChange={setOpenedIds}
          onSelectedChange={setSelectedId}
          openedMenuIds={openedIds}
          selectedId={selectedId}
          {...sidebarMenuProps}
        />
        {createPortal(
          <DragOverlay
            dropAnimation={dropAnimationConfig}
            modifiers={indicator ? [adjustTranslate] : undefined}
          >
            {Boolean(draggedId && draggedItem) && <span>item...</span>}
          </DragOverlay>,
          document.body,
        )}
      </SortableContext>
    </DndContext>
  );
}
