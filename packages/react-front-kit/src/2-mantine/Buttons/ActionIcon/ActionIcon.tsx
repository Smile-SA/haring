/* eslint-disable @typescript-eslint/sort-type-constituents */
import type { ActionIconProps } from '@mantine/core';

import { ActionIcon as MantineActionIcon } from '@mantine/core';

export interface IActionIconProps extends ActionIconProps {
  color?:
    | 'dark'
    | 'gray'
    | 'red'
    | 'pink'
    | 'grape'
    | 'violet'
    | 'indigo'
    | 'blue'
    | 'cyan'
    | 'green'
    | 'lime'
    | 'yellow'
    | 'orange'
    | 'teal';
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?:
    | 'subtle'
    | 'filled'
    | 'outline'
    | 'light'
    | 'default'
    | 'transparent'
    | 'gradient';
}

export function ActionIcon(props: IActionIconProps): JSX.Element {
  return <MantineActionIcon {...props} />;
}
