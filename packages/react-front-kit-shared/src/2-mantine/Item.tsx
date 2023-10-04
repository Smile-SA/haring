import type { ReactElement, ReactNode } from 'react';

import { Center, Grid, Text } from '@mantine/core';

export interface IItemProps {
  children: ReactNode;
  span?: number;
  title: string;
}

export default function Item(props: IItemProps): ReactElement {
  const { children, span = 1, title } = props;
  return (
    <Grid.Col span={span}>
      <Center sx={{ flexDirection: 'column' }}>
        <Text fz="xs" lineClamp={1} sx={{ maxWidth: '100%' }}>
          {title}
        </Text>
      </Center>
      {children}
    </Grid.Col>
  );
}
