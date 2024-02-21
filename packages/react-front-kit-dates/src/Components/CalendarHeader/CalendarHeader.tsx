'use client';

import type { CalendarHeaderProps } from '@mantine/dates';
import type { ReactElement } from 'react';

import { Flex } from '@mantine/core';
import { CalendarHeader as MantineCalendarHeader } from '@mantine/dates';

import classes from './CalendarHeader.module.css';

export type ICalendarHeaderProps = CalendarHeaderProps;

export function CalendarHeader(props: ICalendarHeaderProps): ReactElement {
  const { label, ...calendarHeaderProps } = props;

  return (
    <Flex className={classes.root}>
      <MantineCalendarHeader
        className={classes.header}
        color="red"
        label={label}
        size="md"
        {...calendarHeaderProps}
      />
    </Flex>
  );
}
