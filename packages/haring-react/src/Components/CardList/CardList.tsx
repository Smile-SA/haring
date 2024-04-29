'use client';

import type {
  MantineSpacing,
  ScrollAreaProps,
  StackProps,
} from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { ScrollArea, Stack, getSpacing } from '@mantine/core';

import classes from './CardList.module.css';

export interface ICardListProps extends Omit<ScrollAreaProps, 'children'> {
  children: ReactElement | ReactNode[];
  gap?: MantineSpacing;
  separator?: boolean;
  stackProps?: StackProps;
}

export function CardList(props: ICardListProps): ReactElement {
  const {
    children,
    separator = true,
    gap = 'xl',
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
                ['--separator-gap' as string]: getSpacing(gap),
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
