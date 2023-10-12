import type { TabsProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { ActionIcon, Tabs } from '@mantine/core';
import { useElementSize, useId } from '@mantine/hooks';
import { createStyles } from '@mantine/styles';
import { CaretDoubleRight } from '@phosphor-icons/react';
import { useLayoutEffect, useState } from 'react';

import { DropdownButton } from '../DropdownButton/DropdownButton';

const useStyles = createStyles(() => ({
  container: {
    position: 'relative',
  },
  dropdown: {
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
  tabs: {
    flexWrap: 'nowrap',
  },
}));

export interface IResponsiveTabs extends TabsProps {
  children: ReactNode;
  tabs: ReactElement[];
}

export function ResponsiveTabs(props: IResponsiveTabs): ReactNode {
  const { children, tabs, ...tabsProps } = props;
  const { ref, width } = useElementSize<HTMLDivElement>();
  const overflowButtonId = useId();
  const [overflowIndex, setOverflowIndex] = useState(tabs.length);
  const { classes } = useStyles();

  useLayoutEffect(() => {
    const tabElements = Array.from(ref.current.children) as HTMLElement[];
    const index = tabElements.findIndex(
      (el, i) =>
        el.id !== overflowButtonId &&
        el.offsetLeft +
          el.offsetWidth +
          (i === tabElements.length - 1 ? 0 : 30) >
          width,
    );
    setOverflowIndex(index !== -1 ? index : tabs.length);
  }, [overflowButtonId, ref, tabs.length, width]);

  return (
    <Tabs {...tabsProps} className={classes.container}>
      <div ref={ref} className={classes.hidden}>
        {tabs}
      </div>
      <Tabs.List className={classes.tabs}>
        {tabs.slice(0, overflowIndex)}
        {Boolean(overflowIndex < tabs.length) && (
          <DropdownButton
            buttonComponent={
              <ActionIcon>
                <CaretDoubleRight />
              </ActionIcon>
            }
            id={overflowButtonId}
          >
            <div className={classes.dropdown}>
              {tabs.slice(overflowIndex, tabs.length)}
            </div>
          </DropdownButton>
        )}
      </Tabs.List>
      {children}
    </Tabs>
  );
}
