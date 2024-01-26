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
    height,
    separator = true,
    spacing = '40px',
    ...ScrollAreaProps
  } = props;
  const { classes } = useStyles({ separator, spacing });
  children.props.children.map((item: ReactNode, index: number) => (
    <div key={`${index + index}`} className={classes.item}>
      {item}
    </div>
  ));

  return (
    <ScrollArea
      classNames={{ scrollbar: classes.scrollBar, thumb: classes.thumb }}
      h={height}
      {...ScrollAreaProps}
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
