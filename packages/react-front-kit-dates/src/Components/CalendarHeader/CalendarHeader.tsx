'use client';

import type {
  CalendarHeaderProps,
  MonthProps,
  MonthsListProps,
  YearsListProps,
} from '@mantine/dates';
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

export type ICalendarHeaderType = 'month' | 'monthsList' | 'yearsList';
export type ICalendarHeaderClickType = 'day' | 'month' | 'year';

export interface ICalendarHeaderProps
  extends Omit<CalendarHeaderProps, 'onLevelClick'> {
  date: Date;
  monthProps?: Omit<MonthProps, 'month'>;
  monthsListProps?: Omit<MonthsListProps, 'year'>;
  onDateClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
    date: Date,
    type: ICalendarHeaderClickType,
  ) => void;
  type?: ICalendarHeaderType;
  yearsListProps?: Omit<YearsListProps, 'decade'>;
}

export function CalendarHeader(props: ICalendarHeaderProps): ReactElement {
  const {
    date,
    label,
    type = 'month',
    yearsListProps,
    monthsListProps,
    monthProps,
    onDateClick,
    ...calendarHeaderProps
  } = props;
  const [opened, setOpened] = useState(false);

  function level(): ReactElement | null {
    switch (type) {
      case 'yearsList':
        return (
          <YearsList
            __onControlClick={(e, d) => onDateClick?.(e, d, 'year')}
            decade={date}
            {...yearsListProps}
          />
        );
      case 'monthsList':
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
            className={classes.header}
            color="red"
            label={label}
            onLevelClick={() => setOpened(!opened)}
            size="md"
            {...calendarHeaderProps}
          />
        </Popover.Target>
        <Popover.Dropdown>{level()}</Popover.Dropdown>
      </Popover>
    </Flex>
  );
}
