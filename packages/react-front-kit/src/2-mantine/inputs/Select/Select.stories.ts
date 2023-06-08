import type { Meta, StoryObj } from '@storybook/react';

import { Select as Cmp } from './Select';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '2-Mantine/Inputs/Select',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Select: IStory = {
  args: {
    data: [
      { label: 'React', value: 'react' },
      { label: 'Angular', value: 'ng' },
      { label: 'Svelte', value: 'svelte' },
      { label: 'Vue', value: 'vue' },
    ],
  },
};
