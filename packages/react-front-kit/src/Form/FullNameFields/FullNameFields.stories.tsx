import type { Meta, StoryObj } from '@storybook/react';

import { FullNameFields as Cmp } from './FullNameFields';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Form/FullNameFields',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FullNameFields: IStory = {
  args: {},
};

export const FullNameFieldsWithError: IStory = {
  args: { lastNameDefaultValue: '1SZde%*', lastNameError: 'Bad Format' },
};
