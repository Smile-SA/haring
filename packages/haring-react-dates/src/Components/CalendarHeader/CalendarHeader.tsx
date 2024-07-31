'use client';

import type {
  CalendarHeaderProps,
  MonthProps,
  MonthsListProps,
  YearsListProps,
} from '@mantine/dates';
import type { CalendarLevel } from '@mantine/dates/lib/types/GeneralTypes';
import type { ReactElement } from 'react';

import { Flex, Popover } from '@mantine/core';
import {
  CalendarHeader as MantineCalendarHeader,
  Month,
  MonthsList,
  YearsList,
} from '@mantine/dates';
import { useState } from 'react';

import classes from './CalendarHeader.module.css';

export type ICalendarHeaderClickType = 'day' | 'month' | 'year';

export interface ICalendarHeaderProps
  extends Omit<CalendarHeaderProps, 'onLevelClick'> {
  date: Date;
  level: CalendarLevel;
  monthProps?: Omit<MonthProps, 'month'>;
  monthsListProps?: Omit<MonthsListProps, 'year'>;
  onDateClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
    date: Date,
    level: ICalendarHeaderClickType,
  ) => void;
  yearsListProps?: Omit<YearsListProps, 'decade'>;
}

export function CalendarHeader(props: ICalendarHeaderProps): ReactElement {
  const {
    date,
    level,
    label,
    yearsListProps,
    monthsListProps,
    monthProps,
    onDateClick,
    ...calendarHeaderProps
  } = props;
  const [opened, setOpened] = useState(false);

  function dropdownLevel(): ReactElement | null {
    switch (level) {
      case 'decade':
        return (
          <YearsList
            __onControlClick={(e, d) => onDateClick?.(e, d, 'year')}
            decade={date}
            {...yearsListProps}
          />
        );
      case 'year':
        return (
          <MonthsList
            __onControlClick={(e, d) => onDateClick?.(e, d, 'month')}
            year={date}
            {...monthsListProps}
          />
        );
      case 'month':
        return (
          <Month
            __onDayClick={(e, d) => onDateClick?.(e, d, 'day')}
            month={date}
            {...monthProps}
          />
        );
      default:
        return null;
    }
  }

  return (
    <Flex className={classes.root}>
      <Popover onChange={setOpened} opened={opened} radius={10} width="target">
        <Popover.Target>
          <MantineCalendarHeader
            aria-label="calendar"
            className={classes.header}
            color="red"
            label={label}
            nextLabel="Next button"
            onLevelClick={() => setOpened(!opened)}
            previousLabel="Previous button"
            size="md"
            {...calendarHeaderProps}
          />
        </Popover.Target>
        <Popover.Dropdown>{dropdownLevel()}</Popover.Dropdown>
      </Popover>
    </Flex>
  );
}
