import type { IDropdownButtonProps } from '../DropdownButton/DropdownButton';
import type { TabsListProps, TabsProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { ActionIcon, Tabs } from '@mantine/core';
import { useElementSize, useId } from '@mantine/hooks';
import { createStyles } from '@mantine/styles';
import { CaretDoubleRight } from '@phosphor-icons/react';
import { useLayoutEffect, useState } from 'react';

import { DropdownButton } from '../DropdownButton/DropdownButton';

const useStyles = createStyles((theme) => ({
  button: {
    '&[data-expanded]': {
      backgroundColor:
        theme.colorScheme === 'light'
          ? theme.colors.gray[0]
          : theme.colors.dark[6],
    },
    ':hover': {
      background:
        theme.colorScheme === 'light'
          ? theme.colors.gray[0]
          : theme.colors.dark[6],
    },
    alignSelf: 'center',
    marginBottom: 6,
    marginLeft: 'auto',
  },
  container: {
    position: 'relative',
  },
  dropdown: {
    background:
      theme.colorScheme === 'light' ? theme.white : theme.colors.dark[0],
    borderColor:
      theme.colorScheme === 'light' ? theme.white : theme.colors.dark[0],
    borderRadius: 4,
    padding: '20px',
  },
  dropdownContainer: {
    '> .mantine-Tabs-tab': {
      '&[data-active]': {
        background: theme.colors.gray[0],
        border: 'none',
      },
      ':hover': {
        backgroundColor: theme.colors.gray[0],
        border: 'none',
      },
      '> span': {
        color: theme.colorScheme === 'light' ? theme.black : theme.white,
        fontWeight: 'initial',
      },
      border: 'none',
      borderRadius: 4,
      padding: '10px',
    },
    display: 'flex',
    flexDirection: 'column',
  },
  hidden: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    opacity: 0,
    position: 'absolute',
    visibility: 'hidden',
    width: '100%',
  },
  tab: {
    '&[data-active]': {
      color: theme.colorScheme === 'light' ? theme.black : theme.colors.dark[0],
    },
    paddingBottom: 16,
  },
  tabs: {
    flexWrap: 'nowrap',
  },
}));

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
  const { ref, width } = useElementSize<HTMLDivElement>();
  const generatedId = useId();
  const overflowButtonId = tabsProps.id
    ? `${tabsProps.id}-overflow-button`
    : generatedId;
  const [overflowIndex, setOverflowIndex] = useState(tabs.length);
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  function handleTabChange(value: string): void {
    if (overflowIndex < tabs.length) {
      const activeIndex = tabs.findIndex((tab) => tab.props.value === value);
      if (activeIndex >= overflowIndex) {
        setOpened(true);
      }
    }
  }

  useLayoutEffect(() => {
    const tabElements = Array.from(ref.current.children) as HTMLElement[];
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
      onTabChange={handleTabChange}
      radius="sm"
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
                radius="sm"
              >
                <CaretDoubleRight />
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
