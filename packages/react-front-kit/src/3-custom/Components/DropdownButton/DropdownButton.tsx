/* eslint-disable @typescript-eslint/sort-type-constituents */
import type { MenuProps } from '@mantine/core';
import type { FloatingPosition } from '@mantine/core/lib/Floating';
import type { ReactNode } from 'react';

import { Button, Menu } from '@mantine/core';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { useState } from 'react';

interface IDropdownButtonProps extends MenuProps {
  children?: ReactNode;
  label: string;
  position?:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'top-start'
    | 'right-start'
    | 'bottom-start'
    | 'left-start'
    | 'top-end'
    | 'right-end'
    | 'bottom-end'
    | 'left-end';
}

export function DropdownButton(props: IDropdownButtonProps): JSX.Element {
  const { children, label, ...menuProps } = props;
  const [opened, setOpened] = useState(false);

  return (
    <Menu onChange={setOpened} opened={opened} {...menuProps}>
      <Menu.Target>
        <Button rightIcon={opened ? <CaretUp /> : <CaretDown />}>
          {label}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>{children}</Menu.Dropdown>
    </Menu>
  );
}

DropdownButton.defaultProps = {
  position: 'bottom-start' as FloatingPosition,
};
