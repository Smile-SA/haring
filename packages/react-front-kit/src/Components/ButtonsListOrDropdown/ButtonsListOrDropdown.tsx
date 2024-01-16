'use client';

import type { ReactElement, ReactNode } from 'react';

import { Button, Menu } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';

export interface IItem {
  label: ReactNode;
  value: string;
}

export interface IButtonsListOrDropdownProps {
  current?: string;
  defaultCurrent: string;
  displayAll?: boolean;
  items: IItem[];
  onAction: () => void;
}

export function ButtonsListOrDropdown(
  props: IButtonsListOrDropdownProps,
): ReactElement {
  const {
    current,
    displayAll = false,
    defaultCurrent,
    items = [],
    onAction,
  } = props;

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
        <ul>
          {items.map((item) => {
            return (
              <Button
                key={`${item.value}`}
                onClick={() => handleChange(item.value)}
              >
                {item.label} {item.value === _current && 'Active'}
              </Button>
            );
          })}
        </ul>
      ) : (
        <Menu>
          <Menu.Target>
            <Button>{getCurrentItem(_current)}</Button>
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
