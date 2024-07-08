import type { Meta, StoryObj } from '@storybook/react';

import { StepperPage as Cmp } from './StepperPage';

const meta = {
  component: Cmp,
  parameters: {
    layout: 'fullscreen',
  },
  title: '3-custom/Pages/StepperPage',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const StepperPage: IStory = {
  args: {},
};
