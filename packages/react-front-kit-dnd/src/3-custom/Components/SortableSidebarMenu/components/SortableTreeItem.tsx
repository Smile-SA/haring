import type { ITreeItemProps as TreeItemProps } from './TreeItem';
import type { UniqueIdentifier } from '@dnd-kit/core';
import type { AnimateLayoutChanges } from '@dnd-kit/sortable';
import type { CSSProperties, ReactElement } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { TreeItem } from './TreeItem';
import { ios } from './utilities';

interface ITreeItemProps extends TreeItemProps {
  id: UniqueIdentifier;
}

const animateLayoutChanges: AnimateLayoutChanges = ({
  isSorting,
  wasDragging,
}) => !(isSorting || wasDragging);

export function SortableTreeItem({
  id,
  depth,
  ...props
}: ITreeItemProps): ReactElement {
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
    <TreeItem
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
      {...props}
    />
  );
}
