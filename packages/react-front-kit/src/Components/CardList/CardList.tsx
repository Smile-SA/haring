'use client';

import type { ScrollAreaProps, StackProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { ScrollArea, Stack, rem } from '@mantine/core';

import classes from './CardList.module.css';

export interface ICardListProps extends Omit<ScrollAreaProps, 'children'> {
  children: ReactElement | ReactNode[];
  gap?: number;
  separator?: boolean;
  stackProps?: StackProps;
}

export function CardList(props: ICardListProps): ReactElement {
  const {
    children,
    separator = true,
    gap = 32,
    stackProps,
    ...scrollAreaProps
  } = props;

  return (
    <ScrollArea
      {...scrollAreaProps}
      classNames={{
        root: classes.rootScrollBar,
        scrollbar: classes.scrollBar,
        thumb: classes.thumb,
      }}
    >
      {Array.isArray(children) ? (
        <Stack className={classes.stack} gap={gap} {...stackProps}>
          {children.map((item: ReactNode, index: number) => (
            <div
              key={`${index + index}`}
              className={classes.item}
              style={{
                ['--separator-gap' as string]: rem(-gap / 2),
                ['--separator-display' as string]: separator ? 'block' : 'none',
              }}
            >
              {item}
            </div>
          ))}
        </Stack>
      ) : (
        <div className={classes.item}>{children}</div>
      )}
    </ScrollArea>
  );
}
