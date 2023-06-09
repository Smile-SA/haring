import type { ButtonProps } from '@mantine/core';

import { Button as MantineButton } from '@mantine/core';

export interface IButtonProps extends ButtonProps {
  fullWidth?: boolean;
  variant?:
    | 'filled'
    | 'outline'
    | 'light'
    | 'white'
    | 'default'
    | 'subtle'
    | 'gradient';
}

export function Button(props: IButtonProps): JSX.Element {
  return <MantineButton {...props} />;
}
