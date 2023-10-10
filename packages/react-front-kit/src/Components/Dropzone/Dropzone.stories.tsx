import type { FileWithPath } from '@mantine/dropzone';
import type { Meta, StoryObj } from '@storybook/react';

import { Dropzone as Cmp } from './Dropzone';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/Dropzone',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Dropzone: IStory = {
  args: {
    children: undefined,
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
    onDrop: (files: FileWithPath[]): void => {
      // eslint-disable-next-line no-console
      console.log(files);
    },
  },
};
