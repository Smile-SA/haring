'use client';

import type { ICollapseButtonProps } from './CollapseButton';
import type { CollapseProps } from '@mantine/core';
import type { ElementType, MouseEvent, ReactElement } from 'react';

import { ActionIcon, Button, Collapse } from '@mantine/core';
import { CaretDown, CaretRight } from '@phosphor-icons/react';

import classes from './CollapseButton.module.css';

export interface ICollapseButtonControlledProps<
  T extends number | string,
  C extends ElementType,
> extends ICollapseButtonProps<T, C> {
  collapseProps?: Partial<CollapseProps>;
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
    children,
    collapseProps,
    component: Component = 'button',
    componentProps,
    fullWidth = true,
    id,
    isOpenOnSelect = false,
    indentation,
    label,
    leftSection,
    level = 0,
    onCollapseChange,
    onSelect,
    opened = false,
    radius = 0,
    size = 'md',
    selected,
    ...buttonProps
  } = props;

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

  const indentationStyle =
    indentation === 'simple'
      ? classes.indentationSimple
      : indentation === 'line'
        ? classes.indentationLine
        : '';

  return (
    <>
      <Button
        aria-expanded={opened ? 'true' : 'false'}
        classNames={{
          label: labelClasses.join(' '),
          root: rootClasses.join(' '),
          section: classes.rightIcon,
        }}
        component="div"
        data-selected={selected}
        data-testid="root"
        fullWidth={fullWidth}
        leftSection={
          Boolean(leftSection) && (
            <ActionIcon
              className={selected ? classes.iconSelected : ''}
              color="primary"
              component="div"
              radius="sm"
              variant="light"
            >
              {leftSection}
            </ActionIcon>
          )
        }
        onClick={handleSelect}
        radius={radius}
        rightSection={
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
          className={[classes.button, componentProps?.className].join(' ')}
          data-testid="select"
          type={Component === 'button' ? 'button' : undefined}
          {...componentProps}
        >
          {label}
        </Component>
      </Button>
      {Boolean(children) && (
        <Collapse
          className={indentationStyle}
          data-testid="content"
          in={opened}
          {...collapseProps}
        >
          {children}
        </Collapse>
      )}
    </>
  );
}
