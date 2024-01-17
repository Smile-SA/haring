'use client';
import type { ButtonProps, MenuProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { Button, Menu, createStyles } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';

const useStyles = createStyles(() => ({
  list: {
    display: 'flex',
    gap: '10px',
    listStyle: 'none',
  },
  listItem: {
    cursor: 'pointer',
  },
  listItemActive: {
    fontWeight: 600,
  },
}));

export interface IItem {
  label: ReactNode;
  value: string;
}

export interface IButtonsListOrDropdownProps extends MenuProps {
  buttonMenuProps?: ButtonProps;
  current?: string;
  defaultCurrent: string;
  displayAll?: boolean;
  items: IItem[];
  onAction?: () => void;
}

export function ButtonsListOrDropdown(
  props: IButtonsListOrDropdownProps,
): ReactElement {
  const {
    buttonMenuProps,
    current,
    displayAll = false,
    defaultCurrent,
    items = [],
    onAction,
    ...MenuProps
  } = props;

  const { classes } = useStyles();

  const [_current, setCurrent] = useUncontrolled({
    defaultValue: defaultCurrent,
    onChange: onAction,
    value: current,
  });

  function handleChange(currentValue: string): void {
    setCurrent(currentValue);
  }

  function getCurrentItem(currentValue: string): string {
    const currentItem = items.filter((item) => item.value === currentValue);
    return currentItem[0]?.value ? currentItem[0].value : currentValue;
  }

  return (
    <>
      {displayAll ? (
        <ul className={classes.list}>
          {items.map((item) => {
            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <li
                key={`${item.value}`}
                className={[
                  classes.listItem,
                  item.value === _current && classes.listItemActive,
                ].join(' ')}
                onClick={() => handleChange(item.value)}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      ) : (
        <Menu {...MenuProps}>
          <Menu.Target>
            <Button {...buttonMenuProps}>{getCurrentItem(_current)}</Button>
          </Menu.Target>
          <Menu.Dropdown>
            {items.map((item) => {
              if (item.value !== _current) {
                return (
                  <Menu.Item
                    key={`${item.value}`}
                    onClick={() => handleChange(item.value)}
                  >
                    {item.label}
                  </Menu.Item>
                );
              }
              return '';
            })}
          </Menu.Dropdown>
        </Menu>
      )}
    </>
  );
}
