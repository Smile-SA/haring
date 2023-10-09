import type { HTMLAttributes } from 'react';
import type React from 'react';

import { createStyles, getStylesRef } from '@mantine/core';
import { CollapseButtonControlled } from '@smile/react-front-kit';
import { forwardRef } from 'react';

import { Action } from './Action';
import { Handle } from './Handle';
import { Remove } from './Remove';

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

export interface IMenuItemProps
  extends Omit<HTMLAttributes<HTMLLIElement>, 'id'> {
  childCount?: number;
  clone?: boolean;
  collapsed?: boolean;
  depth: number;
  disableInteraction?: boolean;
  disableSelection?: boolean;
  ghost?: boolean;
  handleProps?: Record<string, unknown>;
  indentationWidth: number;
  indicator?: boolean;
  label?: string;
  onCollapse?: () => void;
  onRemove?: () => void;
  wrapperRef?: (node: HTMLDivElement) => void;
}

// eslint-disable-next-line react/display-name,react/no-multi-comp
export const MenuItem = forwardRef<HTMLDivElement, IMenuItemProps>(
  (props: IMenuItemProps, ref) => {
    const {
      children,
      childCount,
      clone,
      depth,
      disableSelection,
      disableInteraction,
      ghost,
      handleProps,
      indentationWidth,
      indicator,
      collapsed,
      onCollapse,
      onRemove,
      style,
      label,
      wrapperRef,
      ...buttonProps
    } = props;
    // const { classes } = useStyles();

    return (
      <div
        ref={wrapperRef}
        // className={[
        //   classes.wrapper,
        //   Boolean(clone) && classes.clone,
        //   Boolean(ghost) && classes.ghost,
        //   Boolean(indicator) && classes.indicator,
        //   Boolean(disableSelection) && classes.disableSelection,
        //   Boolean(disableInteraction) && classes.disableInteraction,
        // ].join(' ')}
        // style={
        //   {
        //     '--spacing': `${indentationWidth * depth}px`,
        //   } as React.CSSProperties
        // }
        // {...buttonProps}
      >
        <div ref={ref}>
          {/* {onCollapse ? (*/}
          {/*  <Action*/}
          {/*    className={`*/}
          {/*      ${classes.collapse}*/}
          {/*       ${collapsed && classes.collapsed}*/}
          {/*    `}*/}
          {/*    onClick={onCollapse}*/}
          {/*  >*/}
          {/*    {collapseIcon}*/}
          {/*  </Action>*/}
          {/* ) : null}*/}
          {/* <span className={classes.text}>{label}</span>*/}
          {/* {!clone && onRemove ? <Remove onClick={onRemove} /> : null}*/}
          {/* {clone && childCount && childCount > 1 ? (*/}
          {/*  <span className={classes.count}>{childCount}</span>*/}
          {/* ) : null}*/}
          <CollapseButtonControlled
            handleProps={handleProps}
            label={label}
            // onCollapseChange={(isOpened) =>
            //   onCollapseChange(props.id, isOpened)
            // }
            // onSelect={onSelectChange}
            isOpenOnSelect
            level={0}
            line
            opened
          >
            {children}
          </CollapseButtonControlled>
        </div>
      </div>
    );
  },
);

// const collapseIcon = (
//   <svg viewBox="0 0 70 41" width="10" xmlns="http://www.w3.org/2000/svg">
//     <path d="M30.76 39.2402C31.885 40.3638 33.41 40.995 35 40.995C36.59 40.995 38.115 40.3638 39.24 39.2402L68.24 10.2402C69.2998 9.10284 69.8768 7.59846 69.8494 6.04406C69.822 4.48965 69.1923 3.00657 68.093 1.90726C66.9937 0.807959 65.5106 0.178263 63.9562 0.150837C62.4018 0.123411 60.8974 0.700397 59.76 1.76024L35 26.5102L10.24 1.76024C9.10259 0.700397 7.59822 0.123411 6.04381 0.150837C4.4894 0.178263 3.00632 0.807959 1.90702 1.90726C0.807714 3.00657 0.178019 4.48965 0.150593 6.04406C0.123167 7.59846 0.700153 9.10284 1.75999 10.2402L30.76 39.2402Z" />
//   </svg>
// );
