import type { Meta, StoryObj } from '@storybook/react';

import { MantineForm } from './MantineForm';

const meta = {
  component: MantineForm,
  title: '2-mantine/Form',
} satisfies Meta<typeof MantineForm>;

export default meta;
type IStory = Omit<StoryObj<typeof meta>, 'args'>;

export const MantineFormExample: IStory = {};
