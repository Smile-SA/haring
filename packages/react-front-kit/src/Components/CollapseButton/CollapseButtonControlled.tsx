'use client';

import type { ICollapseButtonProps } from './CollapseButton';
import type { ForwardedRef, MouseEvent, ReactElement } from 'react';

import { ActionIcon, Button, Collapse, createStyles } from '@mantine/core';
import { CaretDown, CaretRight } from '@phosphor-icons/react';
import { Handle } from '@smile/react-front-kit-dnd/src/3-custom/Components/SortableSidebarMenu/MenuItem/Handle';
import { forwardRef } from 'react';

const useStyles = createStyles((theme) => ({
  button: {
    background: 'transparent',
    border: 0,
    color: 'inherit',
    cursor: 'inherit',
    flex: 1,
    font: 'inherit',
    height: '100%',
    padding: 0,
    textAlign: 'left',
  },
  iconSelected: {
    background:
      theme.colorScheme === 'light' ? theme.white : theme.colors.dark[7],
  },
  label: {
    color:
      theme.colorScheme === 'light'
        ? theme.colors.dark[3]
        : theme.colors.dark[0],
    flex: 1,
  },
  labelDeepLevel: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 400,
  },
  labelLevel1: {
    fontSize: theme.fontSizes.md,
  },
  line: {
    borderLeft:
      theme.colorScheme === 'light'
        ? `1px solid ${theme.colors.gray[1]}`
        : `1px solid ${theme.colors.gray[8]}`,
    marginLeft: 30,
  },
  rightIcon: {
    color:
      theme.colorScheme === 'light'
        ? theme.colors.dark[3]
        : theme.colors.dark[0],
    fontSize: theme.fontSizes.md,
  },
  root: {
    background: 'transparent',
  },
  rootDeepLevel: {
    height: 30,
  },
  rootLevel1: {
    height: 36,
  },
}));

export interface ICollapseButtonControlledProps extends ICollapseButtonProps {
  /** Only in the Controlled version, use this prop to provide the opened/collapsed state */
  collapsed?: boolean;
  /** Forcefully enable/disable the collapse content */
  isCollapsible?: boolean;
  /** Only in the Controlled version, use this prop to provide the setter function for the opened/collapsed state */
  onCollapseChange?: (isOpened: boolean) => void;
}

export const CollapseButtonControlled = forwardRef(
  function CollapseButtonControlled(
    props: ICollapseButtonControlledProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement {
    const {
      children,
      fullWidth = true,
      handleProps,
      id,
      isOpenOnSelect = false,
      label,
      leftIcon,
      level = 0,
      line,
      onCollapseChange,
      onSelect,
      collapsed = true,
      isCollapsible = true,
      radius = 0,
      size = 'md',
      selected,
      ...buttonProps
    } = props;
    const { classes } = useStyles();

    function handleClick(event: MouseEvent<HTMLButtonElement>): void {
      event.stopPropagation();
      if (children) {
        onCollapseChange?.(!collapsed);
      }
    }

    function handleSelect(): void {
      if (children && isOpenOnSelect) {
        onCollapseChange?.(!collapsed);
      }
      onSelect?.(id);
    }

    const rootClasses = [];
    const labelClasses = [classes.label];
    if (!selected) {
      rootClasses.push(classes.root);
    }
    if (level === 1) {
      rootClasses.push(classes.rootLevel1);
      labelClasses.push(classes.labelLevel1);
    } else if (level > 1) {
      rootClasses.push(classes.rootDeepLevel);
      labelClasses.push(classes.labelDeepLevel);
    }

    return (
      <div ref={ref}>
        <Button
          aria-expanded={collapsed ? 'false' : 'true'}
          classNames={{
            label: labelClasses.join(' '),
            rightIcon: classes.rightIcon,
            root: rootClasses.join(' '),
          }}
          component="div"
          data-selected={selected}
          data-testid="root"
          fullWidth={fullWidth}
          leftIcon={
            Boolean(leftIcon) && (
              <ActionIcon
                className={selected ? classes.iconSelected : ''}
                color="primary"
                component="div"
                radius="sm"
                variant="light"
              >
                {leftIcon}
              </ActionIcon>
            )
          }
          onClick={handleSelect}
          radius={radius}
          rightIcon={
            Boolean(children && isCollapsible) && (
              <ActionIcon
                data-testid="toggle"
                onClick={handleClick}
                radius="sm"
                variant="transparent"
              >
                {collapsed ? <CaretRight /> : <CaretDown />}
              </ActionIcon>
            )
          }
          size={size}
          variant={selected ? 'light' : 'white'}
          {...buttonProps}
        >
          {/* TODO: temp, have prop to add some arbitrary component, or specific Handle toggle, or no handle but a long press/other method*/}
          {Boolean(handleProps) && <Handle {...handleProps} />}
          <button className={classes.button} data-testid="select" type="button">
            {label}
          </button>
        </Button>
        {Boolean(children && isCollapsible) && (
          <Collapse
            className={line ? classes.line : ''}
            data-testid="content"
            in={!collapsed}
          >
            {children}
          </Collapse>
        )}
      </div>
    );
  },
);
