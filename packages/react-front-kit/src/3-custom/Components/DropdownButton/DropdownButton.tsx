'use client';

import type { MenuProps } from '@mantine/core';
import type { ReactNode } from 'react';

import { Button, Menu } from '@mantine/core';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { useId, useState } from 'react';

interface IDropdownButtonProps extends MenuProps {
  children?: ReactNode;
  label: string;
}

export function DropdownButton(props: IDropdownButtonProps): JSX.Element {
  const { children, label, position = 'bottom-start', ...menuProps } = props;
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
        <Button
          data-testid="button"
          rightIcon={opened ? <CaretUp /> : <CaretDown />}
        >
          {label}
        </Button>
      </Menu.Target>
      <Menu.Dropdown data-testid="dropdown">{children}</Menu.Dropdown>
    </Menu>
  );
}
