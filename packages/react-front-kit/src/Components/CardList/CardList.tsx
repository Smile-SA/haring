'use client';

import type { MantineSpacing, ScrollAreaProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { ScrollArea, Stack, useMantineTheme } from '@mantine/core';

import classes from './CardList.module.css';

export interface ICardListProps extends Omit<ScrollAreaProps, 'children'> {
  children: ReactElement | ReactNode[];
  gap?: MantineSpacing;
  separator?: boolean;
}

export function CardList(props: ICardListProps): ReactElement {
  const { children, separator = true, gap = 'xl', ...scrollAreaProps } = props;

  const theme = useMantineTheme();

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
              {separator ? (
                <hr
                  className={classNames.join(' ')}
                  style={
                    index + 1 !== children.length
                      ? {
                          bottom:
                            gap === 'xl' ||
                            gap === 'sm' ||
                            gap === 'lg' ||
                            gap === 'xs' ||
                            gap === 'md'
                              ? `calc(${theme.spacing[gap]} -
                            ${theme.spacing[gap]} -
                            ${theme.spacing[gap]} / 2)`
                              : typeof gap === 'number'
                                ? `calc(-${gap}px /2)`
                                : `calc(-${gap} / 2)`,
                        }
                      : { display: 'none' }
                  }
                />
              ) : null}
            </div>
          ))}
        </Stack>
      ) : (
        <div className={classes.item}>{children}</div>
      )}
    </ScrollArea>
  );
}
