'use client';

import type { ScrollAreaProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { CardSection, ScrollArea } from '@mantine/core';

import { useStyles } from './CardList.style';

interface IChildren {
  props: { children: ReactNode[] };
}

export interface ICardListProps extends Omit<ScrollAreaProps, 'children'> {
  children: IChildren;
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
      <CardSection className={classes.section}>
        {children.props.children.map((item: ReactNode, index: number) => (
          <div key={`${index + index}`} className={classes.item}>
            {item}
          </div>
        ))}
      </CardSection>
    </ScrollArea>
  );
}
