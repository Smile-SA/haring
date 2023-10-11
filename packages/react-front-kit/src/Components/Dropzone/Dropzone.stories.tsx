import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { Dropzone as Cmp } from './Dropzone';

const meta = {
  argTypes: {
    browseLabel: {
      control: 'text',
    },
    dragLabel: {
      control: 'text',
    },
  },
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/Dropzone',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Dropzone: IStory = {
  args: {
    browseLabel: undefined,
    children: undefined,
    dragLabel: undefined,
    files: [
      {
        lastModified: 1682342930770,
        name: 'CERFA.postman_collection.json',
        path: 'CERFA.postman_collection.json',
        size: 1579,
        type: 'application/json',
      },
      {
        lastModified: 1682342930770,
        name: 'CERFA.postman_collection.json',
        path: 'CERFA.postman_collection.json',
        size: 1579,
        type: 'application/json',
      },
      {
        lastModified: 1682342930770,
        name: 'CERFA.postman_collection.json',
        path: 'CERFA.postman_collection.json',
        size: 1579,
        type: 'application/json',
      },
      {
        lastModified: 1682342930770,
        name: 'CERFA.postman_collection.json',
        path: 'CERFA.postman_collection.json',
        size: 1579,
        type: 'application/json',
      },
    ],
    onDrop: action('onDrop'),
    onRemoveFile: action('onRemoveFile'),
  },
};
