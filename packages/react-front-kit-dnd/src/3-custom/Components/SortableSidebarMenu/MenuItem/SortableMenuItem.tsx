import type { IMenuItemProps } from './MenuItem';
import type { UniqueIdentifier } from '@dnd-kit/core';
import type { AnimateLayoutChanges } from '@dnd-kit/sortable';
import type { CSSProperties, ReactElement } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { MenuItem } from './MenuItem';

interface ISortableMenuItemProps extends IMenuItemProps {
  id: UniqueIdentifier;
}

const animateLayoutChanges: AnimateLayoutChanges = ({
  isSorting,
  wasDragging,
}) => !(isSorting || wasDragging);

export function SortableMenuItem(props: ISortableMenuItemProps): ReactElement {
  const { children, id, depth, ...itemProps } = props;
  const ios = /iPad|iPhone|iPod/.test(navigator.platform);
  const {
    attributes,
    isDragging,
    isSorting,
    listeners,
    setDraggableNodeRef,
    setDroppableNodeRef,
    transform,
    transition,
  } = useSortable({
    animateLayoutChanges,
    id,
  });
  const style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <MenuItem
      ref={setDraggableNodeRef}
      depth={depth}
      disableInteraction={isSorting}
      disableSelection={ios}
      ghost={isDragging}
      handleProps={{
        ...attributes,
        ...listeners,
      }}
      style={style}
      wrapperRef={setDroppableNodeRef}
      {...itemProps}
    >
      {children}
    </MenuItem>
  );
}
