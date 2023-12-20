import type { Meta, StoryObj } from '@storybook/react';

import { Preview as Cmp } from './Preview';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/Preview',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Pdf: IStory = {
  args: {
    url: './example.pdf',
  },
};

export const ImagePng: IStory = {
  args: {
    url: './image.png',
  },
};

export const ImageSvg: IStory = {
  args: {
    url: './logo.svg',
  },
};

export const Video: IStory = {
  args: {
    url: './video.mp4',
  },
};

export const Audio: IStory = {
  args: {
    url: './audio.mp3',
  },
};
