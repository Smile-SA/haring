import type { UniqueIdentifier } from '@dnd-kit/core';
import type { AnimateLayoutChanges } from '@dnd-kit/sortable';
import type { CSSProperties, ReactElement } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Handle } from './example/TreeItem';

interface IMenuProps {
  childCount?: number;
  clone?: boolean;
  collapsed?: boolean;
  depth: number;
  indentationWidth: number;
  indicator?: boolean;
  onCollapse?: () => void;
  onRemove?: () => void;
  value: string;
}

interface ISortableMenuProps extends IMenuProps {
  id: UniqueIdentifier;
}

const animateLayoutChanges: AnimateLayoutChanges = ({
  isSorting,
  wasDragging,
}) => !(isSorting || wasDragging);

export function SortableMenu(props: ISortableMenuProps): ReactElement {
  const { id, ...menuProps } = props;
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
    // <TreeItem
    //   ref={setDraggableNodeRef}
    //   depth={depth}
    //   // disableInteraction={isSorting}
    //   // disableSelection={ios}
    //   ghost={isDragging}
    //   handleProps={{
    //     ...attributes,
    //     ...listeners,
    //   }}
    //   style={style}
    //   wrapperRef={setDroppableNodeRef}
    //   {...props}
    // />
    <div ref={setDroppableNodeRef} {...menuProps}>
      <div ref={setDraggableNodeRef} style={style}>
        <Handle {...{ ...attributes, ...listeners }} />
        <p>ITEM</p>
        <p>{isDragging}</p>
        <p>{isSorting}</p>
      </div>
    </div>
  );
}
