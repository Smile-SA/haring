import type { SwitchProps } from '@mantine/core';

import { Switch as MantineSwitch } from '@mantine/core';

interface ISwitchProps extends SwitchProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function Switch(props: ISwitchProps): JSX.Element {
  return <MantineSwitch {...props} />;
}
