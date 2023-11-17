import type { Meta, StoryObj } from '@storybook/react';

import { Thumbnail as Cmp } from './Thumbnail';
import { thumbnailActionsMock } from './Thumbnail.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/Thumbnail',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Thumbnail: IStory = {
  args: {
    actions: thumbnailActionsMock,
    iconType: 'PDF',
    id: '1',
    label: 'Debit_Suivi_PREV',
    selected: false,
  },
};
