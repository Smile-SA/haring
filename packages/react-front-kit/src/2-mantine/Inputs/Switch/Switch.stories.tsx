import type { Meta, StoryObj } from '@storybook/react';

import { Switch as Cmp } from './Switch';

const meta = {
  component: Cmp,
  title: '2-mantine/Inputs/Switch',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Switch: IStory = {
  args: {
    label: 'Voir l’arborescence',
    size: 'xs',
  },
};
