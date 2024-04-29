import type { Meta, StoryObj } from '@storybook/react';

import { ThumbnailGrid as Cmp } from './ThumbnailGrid';
import { thumbnailGridMock } from './ThumbnailGrid.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/ThumbnailGrid',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ThumbnailGrid: IStory = {
  args: { ...thumbnailGridMock },
};
