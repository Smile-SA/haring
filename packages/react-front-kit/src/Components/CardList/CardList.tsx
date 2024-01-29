'use client';

import type { ScrollAreaProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { CardSection, ScrollArea } from '@mantine/core';

import { useStyles } from './CardList.style';

export interface ICardListProps extends Omit<ScrollAreaProps, 'children'> {
  children: ReactNode;
  height?: string;
  separator?: boolean;
  spacing?: string;
}

export function CardList(props: ICardListProps): ReactElement {
  const {
    children,
    separator = true,
    spacing = '40px',
    p = '0px 20px',
    ...scrollAreaProps
  } = props;
  const { classes } = useStyles({ separator, spacing });
  return (
    <ScrollArea
      classNames={{ scrollbar: classes.scrollBar, thumb: classes.thumb }}
      p={p}
      {...scrollAreaProps}
    >
      <CardSection className={classes.section}>{children}</CardSection>
    </ScrollArea>
  );
}
