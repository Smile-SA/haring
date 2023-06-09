import type { MenuProps } from '@mantine/core';
import type { ReactNode } from 'react';

import { Button, Menu } from '@mantine/core';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { useState } from 'react';

interface IDropdownButtonProps extends MenuProps {
  children?: ReactNode;
  label: string;
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
  position: 'bottom-start' as MenuProps['position'],
};
