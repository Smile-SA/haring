'use client';

import type { IDropdownButtonProps } from '../DropdownButton/DropdownButton';
import type { TabsListProps, TabsProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { ActionIcon, Tabs } from '@mantine/core';
import { useElementSize, useId } from '@mantine/hooks';
import { CaretDoubleRight } from '@phosphor-icons/react';
import { useLayoutEffect, useState } from 'react';

import { DropdownButton } from '../DropdownButton/DropdownButton';

import classes from './ResponsiveTabs.module.css';

const dropdownButtonWidth = 30;

export interface IResponsiveTabs extends TabsProps {
  children: ReactNode;
  dropdownButtonAriaLabel?: string;
  dropdownButtonProps?: IDropdownButtonProps;
  tabs: ReactElement<HTMLButtonElement>[];
  tabsListProps?: TabsListProps;
}

export function ResponsiveTabs(props: IResponsiveTabs): ReactNode {
  const {
    children,
    dropdownButtonAriaLabel = 'Overflow Button',
    dropdownButtonProps,
    tabs,
    tabsListProps,
    ...tabsProps
  } = props;
  const { height, ref, width } = useElementSize<HTMLDivElement>();
  const generatedId = useId();
  const overflowButtonId = tabsProps.id
    ? `${tabsProps.id}-overflow-button`
    : generatedId;
  const [overflowIndex, setOverflowIndex] = useState(tabs.length);
  const [opened, setOpened] = useState(false);

  function handleTabChange(value: string | null): void {
    if (overflowIndex < tabs.length) {
      const activeIndex = tabs.findIndex((tab) => tab.props.value === value);
      if (activeIndex >= overflowIndex) {
        setOpened(true);
      }
    }
  }

  useLayoutEffect(() => {
    const tabElements = Array.from(
      ref.current !== null ? ref.current.children : [],
    ) as HTMLElement[];
    // Remove ids of hidden tabs to prevent duplicate ids
    tabElements.forEach((el) => el.removeAttribute('id'));
    const index = tabElements.findIndex(
      // calculate which elements overflow out of parent width, include width of potential dropdown button in the calculation except on last element
      (el, i) =>
        el.id !== overflowButtonId &&
        el.offsetLeft +
          el.offsetWidth +
          (i === tabElements.length - 1 ? 0 : dropdownButtonWidth) >
          width,
    );
    setOverflowIndex(index !== -1 ? index : tabs.length);
  }, [overflowButtonId, ref, tabs.length, width]);

  return (
    <Tabs
      className={classes.container}
      classNames={{ tab: classes.tab }}
      onChange={handleTabChange}
      radius="sm"
      style={{ paddingTop: height }}
      {...tabsProps}
    >
      <div ref={ref} aria-hidden className={classes.hidden} hidden>
        {tabs}
      </div>
      <Tabs.List className={classes.tabs} grow {...tabsListProps}>
        {tabs.slice(0, overflowIndex)}
        {Boolean(overflowIndex < tabs.length) && (
          <DropdownButton
            buttonComponent={
              <ActionIcon
                aria-label={dropdownButtonAriaLabel}
                className={classes.button}
                color="gray-9"
                radius="sm"
                variant="subtle"
              >
                <CaretDoubleRight size={14} />
              </ActionIcon>
            }
            classNames={{ dropdown: classes.dropdown }}
            id={overflowButtonId}
            keepMounted
            offset={4}
            onChange={setOpened}
            opened={opened}
            position="bottom-end"
            {...dropdownButtonProps}
          >
            <div className={classes.dropdownContainer}>
              {tabs.slice(overflowIndex, tabs.length)}
            </div>
          </DropdownButton>
        )}
      </Tabs.List>
      {children}
    </Tabs>
  );
}
