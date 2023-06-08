import type { SelectProps } from '@mantine/core';

import { Select as MantineSelect } from '@mantine/core';

export interface ISelectProps extends SelectProps {
  variant?: 'default' | 'filled' | 'unstyled';
}

export function Select(props: ISelectProps): JSX.Element {
  return <MantineSelect {...props} />;
}
