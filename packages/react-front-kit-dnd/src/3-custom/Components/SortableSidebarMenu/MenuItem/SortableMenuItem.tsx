import type { UniqueIdentifier } from '@dnd-kit/core';
import type { AnimateLayoutChanges } from '@dnd-kit/sortable';
import type { ICollapseButtonControlledProps } from '@smile/react-front-kit/src/Components/CollapseButton/CollapseButtonControlled';
import type { CSSProperties, ReactElement } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { createStyles, getStylesRef } from '@mantine/core';
import { CollapseButtonControlled } from '@smile/react-front-kit/src/Components/CollapseButton/CollapseButtonControlled';

const useStyles = createStyles(() => ({
  clone: {
    ref: getStylesRef('clone'),
  },
  collapse: {
    '& svg': {
      transition: 'transform 250ms ease',
    },
    [`.${getStylesRef('collapsed')} svg`]: {
      transform: 'rotate(-90deg)',
    },
  },
  collapsed: {
    ref: getStylesRef('collapsed'),
  },
  count: {
    alignItems: 'center',
    backgroundColor: '#2389ff',
    borderRadius: '50%',
    color: '#fff',
    display: 'flex',
    fontSize: '0.8rem',
    fontWeight: 600,
    height: 24,
    justifyContent: 'center',
    position: 'absolute',
    ref: getStylesRef('count'),
    right: -10,
    top: -10,
    width: 24,
  },
  disableInteraction: {
    pointerEvents: 'none',
  },
  disableSelection: {
    ref: getStylesRef('disableSelection'),
    [`.${getStylesRef('clone')}`]: {
      [`.${getStylesRef('text')}, .${getStylesRef('count')}`]: {
        userSelect: 'none',
      },
    },
  },
  ghost: {
    ref: getStylesRef('ghost'),
  },
  indicator: {
    ref: getStylesRef('indicator'),
  },
  menuItem: {
    '--vertical-padding': '10px',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1px solid #dedede',
    boxSizing: 'border-box',
    color: '#222',
    display: 'flex',
    padding: 'var(--vertical-padding) 10px',
    position: 'relative',
    ref: getStylesRef('menuItem'),
  },
  text: {
    flexGrow: 1,
    overflow: 'hidden',
    paddingLeft: '0.5rem',
    ref: getStylesRef('text'),
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  wrapper: {
    boxSizing: 'border-box',
    listStyle: 'none',
    marginBottom: -1,
    paddingLeft: 'var(--spacing)',
    [`&.${getStylesRef('clone')}`]: {
      display: 'inline-block',
      padding: 0,
      paddingLeft: 10,
      paddingTop: 5,
      pointerEvents: 'none',
      [`.${getStylesRef('menuItem')}`]: {
        '--vertical-padding': '5px',
        borderRadius: 4,
        boxShadow: '0 15px 15px 0 rgba(34, 33, 81, 0.1)',
        paddingRight: 24,
      },
    },
    [`&.${getStylesRef('ghost')}`]: {
      [`&.${getStylesRef('indicator')}`]: {
        marginBottom: -1,
        opacity: 1,
        position: 'relative',
        zIndex: 1,
        [`.${getStylesRef('menuItem')}`]: {
          '&:before': {
            backgroundColor: '#ffffff',
            border: '1px solid #2389ff',
            borderRadius: '50%',
            content: '""',
            display: 'block',
            height: 12,
            left: -8,
            position: 'absolute',
            top: -4,
            width: 12,
          },
          '> *': {
            height: 0,
            opacity: 0,
          },
          backgroundColor: '#56a1f8',
          borderColor: '#2389ff',
          height: 8,
          padding: 0,
          position: 'relative',
        },
      },
      [`&:not(.${getStylesRef('indicator')})`]: {
        opacity: 0.5,
      },
      [`.${getStylesRef('menuItem')} > *`]: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    },
  },
}));

const animateLayoutChanges: AnimateLayoutChanges = ({
  isSorting,
  wasDragging,
}) => !(isSorting || wasDragging);

// const ios = /iPad|iPhone|iPod/.test(navigator.platform);

interface ISortableMenuItemProps extends ICollapseButtonControlledProps {
  childCount?: number;
  clone?: boolean;
  id: UniqueIdentifier;
}

export function SortableMenuItem(props: ISortableMenuItemProps): ReactElement {
  const { id, childCount, clone, children, ...collapseButtonProps } = props;
  const {
    attributes,
    // isDragging,
    // isSorting,
    listeners,
    setDraggableNodeRef,
    setDroppableNodeRef,
    transform,
    transition,
  } = useSortable({
    animateLayoutChanges,
    id,
  });
  // const { classes } = useStyles();
  const style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <div ref={setDroppableNodeRef} style={style}>
      <CollapseButtonControlled
        ref={setDraggableNodeRef}
        // disableInteraction={isSorting}
        // disableSelection={ios}
        // ghost={isDragging}
        handleProps={{
          ...attributes,
          ...listeners,
        }}
        {...collapseButtonProps}
      >
        {children}
      </CollapseButtonControlled>
    </div>
  );
}
