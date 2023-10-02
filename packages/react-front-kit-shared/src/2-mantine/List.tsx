import type { ComponentType, ReactElement } from 'react';

import { Center, Grid } from '@mantine/core';

import Item from './Item';

interface IListProps {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Cmp: ComponentType;
  commonProps?: Record<string, unknown>;
  span?: number;
  title: string;
  variantProps?: Record<string, string[]>;
}

export default function List(props: IListProps): ReactElement {
  const { commonProps = {}, Cmp, span = 1, title, variantProps = {} } = props;
  return (
    <Grid>
      <Grid.Col span={1}>
        <Center h="100%" sx={{ alignItems: 'center' }}>
          {title}
        </Center>
      </Grid.Col>
      <Item span={span} title="default">
        <Cmp {...commonProps} />
      </Item>
      {Object.entries(variantProps).map(([prop, values]) =>
        values.map((value) => {
          const props = { ...commonProps, [prop]: value };
          return (
            <Item
              key={`${prop}-${value}`}
              span={span}
              title={`${prop}=${value}`}
            >
              <Cmp {...props} />
            </Item>
          );
        }),
      )}
    </Grid>
  );
}
