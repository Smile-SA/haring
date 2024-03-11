import type { Meta, StoryObj } from '@storybook/react';

import { ReactHookForm } from './ReactHookForm';

const meta = {
  component: ReactHookForm,
  title: '2-mantine/Form',
} satisfies Meta<typeof ReactHookForm>;

export default meta;
type IStory = Omit<StoryObj<typeof meta>, 'args'>;

export const ReactHookFormExample: IStory = {};
