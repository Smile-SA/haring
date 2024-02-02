'use client';

import type { MantineSpacing, ScrollAreaProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { ScrollArea, Stack, getSize } from '@mantine/core';

import classes from './CardList.module.css';

export interface ICardListProps extends Omit<ScrollAreaProps, 'children'> {
  children: ReactElement | ReactNode[];
  gap?: MantineSpacing;
  separator?: boolean;
}

export function CardList(props: ICardListProps): ReactElement {
  const { children, separator = true, gap = 'xl', ...scrollAreaProps } = props;

  const classNames = [classes.separator];
  if (separator) {
    classNames.push(classes.separatorActive);
  }
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
        <Stack className={classes.stack} gap={gap}>
          {children.map((item: ReactNode, index: number) => (
            <div key={`${index + index}`} className={classes.item}>
              {item}
              <hr
                className={classNames.join(' ')}
                style={{
                  bottom: separator
                    ? //  "500px" should be replaced by "theme.separator" which should be "theme.gap" on this version of Mantine.
                      getSize({ size: gap, sizes: '500px' }) / 2
                    : '',
                }}
              />
            </div>
          ))}
        </Stack>
      ) : (
        <div className={classes.item}>{children}</div>
      )}
    </ScrollArea>
  );
}
