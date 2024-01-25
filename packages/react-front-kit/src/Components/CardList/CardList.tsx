'use client';

import type { ICardHeaderProps } from '../CardHeader/CardHeader';
import type { CardProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import {
  Card,
  CardSection,
  ScrollArea,
  Stack,
  createStyles,
} from '@mantine/core';

import { CardHeader } from '../CardHeader/CardHeader';
import { icon, title } from '../CardHeader/CardHeader.mock';

export const useStyles = createStyles(() => ({
  root: {
    margin: 0,
  },
  section: {
    margin: '0',
  },
}));

export interface ICardListProps extends CardProps {
  cardHeaderProps?: ICardHeaderProps;
  children: ReactNode;
  height?: string;
  separator?: boolean;
  spacing: string;
}

export function CardList(props: ICardListProps): ReactElement {
  const {
    cardHeaderProps,
    children,
    height = '500px',
    separator,
    spacing = '24px 32px',
    ...RootProps
  } = props;
  const { classes } = useStyles();

  return (
    <Card {...RootProps} className={classes.root} p={0}>
      <CardHeader {...cardHeaderProps} leftSection={icon} p={spacing}>
        {title}
      </CardHeader>
      <ScrollArea h={height}>
        <CardSection className={classes.section} p={spacing}>
          <Stack spacing={spacing}>
            {children?.props?.children?.map((item: ReactNode) => <>{item}</>)}
          </Stack>
        </CardSection>
      </ScrollArea>
    </Card>
  );
}
