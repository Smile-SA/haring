import type { InputProps } from '@mantine/core';

import { Input as MantineInput } from '@mantine/core';

export interface IInputProps extends InputProps {
  variant?: 'default' | 'filled' | 'unstyled';
}

export function Input(props: IInputProps): JSX.Element {
  return <MantineInput {...props} />;
}
