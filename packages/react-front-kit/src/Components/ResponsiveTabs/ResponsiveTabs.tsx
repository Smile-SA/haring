import type { TabsProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { ActionIcon, Tabs } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { createStyles } from '@mantine/styles';
import { CaretDoubleRight } from '@phosphor-icons/react';
import { createRef, useEffect, useState } from 'react';

import { DropdownButton } from '../DropdownButton/DropdownButton';

const useStyles = createStyles(() => ({
  dropdown: {
    display: 'flex',
    flexDirection: 'column',
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
  const [overflowIndex, setOverflowIndex] = useState<number>(tabs.length);
  const tabsRef = createRef<HTMLDivElement>();
  const overflowButtonId = useId();
  const { classes } = useStyles();

  // TODO: useElementSize (https://v6.mantine.dev/hooks/use-element-size/) to re-calculate overflow on resize
  useEffect(() => {
    const parentElement = tabsRef.current;
    if (parentElement) {
      const tabElements = Array.from(
        parentElement.children,
      ) as HTMLButtonElement[];
      const overflowIndex = tabElements.findIndex((el) => {
        return (
          el.id !== overflowButtonId &&
          (el.offsetLeft - parentElement.offsetWidth + 30 >
            parentElement.offsetWidth ||
            el.offsetTop - parentElement.offsetTop > parentElement.offsetHeight)
        );
      });
      setOverflowIndex(overflowIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tabs {...tabsProps} style={{ overflow: 'hidden' }}>
      <Tabs.List ref={tabsRef} className={classes.tabs}>
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
