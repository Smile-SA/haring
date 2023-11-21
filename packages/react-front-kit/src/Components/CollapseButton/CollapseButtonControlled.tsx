'use client';

import type { ICollapseButtonProps } from './CollapseButton';
import type {
  CSSProperties,
  ElementType,
  MouseEvent,
  ReactElement,
} from 'react';

import { ActionIcon, Button, Collapse, createStyles } from '@mantine/core';
import { _BackgroundImage } from '@mantine/core/lib/BackgroundImage/BackgroundImage';
import { CaretDown, CaretRight } from '@phosphor-icons/react';

const useStyles = createStyles((theme) => ({
  button: {
    alignItems: 'center',
    background: 'transparent',
    border: 0,
    color: 'inherit',
    cursor: 'inherit',
    display: 'flex',
    flex: 1,
    font: 'inherit',
    height: '100%',
    padding: 0,
    textAlign: 'left',
    textDecoration: 'none',
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

export interface ICollapseButtonControlledProps<
  T extends number | string,
  C extends ElementType,
> extends ICollapseButtonProps<T, C> {
  collapseStyle?: CSSProperties;
  /** Only in the Controlled version, use this prop to provide the setter function for the opened/collapsed state */
  onCollapseChange?: (isOpened: boolean) => void;
  /** Only in the Controlled version, use this prop to provide the opened/collapsed state */
  opened: boolean;
}

export function CollapseButtonControlled<
  T extends number | string,
  C extends ElementType = 'button',
>(props: ICollapseButtonControlledProps<T, C>): ReactElement {
  const {
    collapseStyle,
    children,
    component: Component = 'button',
    componentProps,
    fullWidth = true,
    id,
    isOpenOnSelect = false,
    label,
    leftIcon,
    level = 0,
    line,
    onCollapseChange,
    onSelect,
    opened = false,
    radius = 0,
    size = 'md',
    selected,
    ...buttonProps
  } = props;
  const { classes } = useStyles();

  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    event.stopPropagation();
    if (children) {
      onCollapseChange?.(!opened);
    }
  }

  function handleSelect(): void {
    if (children && isOpenOnSelect) {
      onCollapseChange?.(!opened);
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
    <>
      <Button
        aria-expanded={opened ? 'true' : 'false'}
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
          Boolean(children) && (
            <ActionIcon
              data-testid="toggle"
              onClick={handleClick}
              radius="sm"
              variant="transparent"
            >
              {opened ? <CaretDown /> : <CaretRight />}
            </ActionIcon>
          )
        }
        size={size}
        variant={selected ? 'light' : 'white'}
        {...buttonProps}
      >
        <Component
          className={classes.button}
          data-testid="select"
          type={Component === 'button' ? 'button' : undefined}
          {...componentProps}
        >
          {label}
        </Component>
      </Button>
      {Boolean(children) && (
        <Collapse
          className={line ? classes.line : ''}
          data-testid="content"
          in={opened}
          style={collapseStyle}
        >
          {children}
        </Collapse>
      )}
    </>
  );
}
