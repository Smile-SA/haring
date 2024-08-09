'use client';

import type { MenuProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { Button, Menu } from '@mantine/core';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { useId, useState } from 'react';

export interface IDropdownButtonProps extends MenuProps {
  /** Override default menu target with custom component*/
  buttonComponent?: ReactNode;
  children?: ReactNode;
  label?: string;
  role?: string;
}

/** Additional props will be forwarded to the [Mantine Menu component](https://mantine.dev/core/menu) */
export function DropdownButton(props: IDropdownButtonProps): ReactElement {
  const {
    buttonComponent,
    children,
    label,
    position = 'bottom-start',
    ...menuProps
  } = props;
  const [opened, setOpened] = useState(false);
  const id = useId();

  return (
    <Menu
      id={id}
      onChange={setOpened}
      opened={opened}
      position={position}
      {...menuProps}
    >
      <Menu.Target>
        {buttonComponent ?? (
          <Button
            data-testid="button"
            rightSection={opened ? <CaretUp /> : <CaretDown />}
          >
            {label}
          </Button>
        )}
      </Menu.Target>
      <Menu.Dropdown data-testid="dropdown">{children}</Menu.Dropdown>
    </Menu>
  );
}
