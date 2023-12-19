import type { IFilter } from '@smile/react-front-kit-shared';

import { Select, TextInput } from '@mantine/core';

export const filtersMock: IFilter[] = [
  {
    active: false,
    component: <TextInput placeholder="some value" />,
    id: 1,
    label: 'Filter A',
  },
  {
    active: false,
    component: (
      <Select
        data={[
          { label: 'Some value', value: 'some value' },
          {
            label: 'Another value',
            value: 'another value',
          },
        ]}
        value="some value"
      />
    ),
    id: 2,
    label: 'Filter B',
  },
  {
    active: true,
    component: <TextInput placeholder="some value" />,
    id: 3,
    label: 'Filter C',
  },
  {
    active: true,
    component: (
      <Select
        data={[
          { label: 'Another value', value: 'another value' },
          { label: 'Some value', value: 'some value' },
        ]}
        value="another value"
      />
    ),
    id: 4,
    label: 'Filter D',
  },
];
