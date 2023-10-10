import type { FileWithPath } from '@mantine/dropzone';
import type { Meta, StoryObj } from '@storybook/react';

import { useStorybookArgsConnect } from '@smile/react-front-kit-shared/src/storybook-utils';

import { Dropzone as Cmp } from './Dropzone';

const meta = {
  component: Cmp,
  decorators: [
    function Component(Story, ctx) {
      const args = useStorybookArgsConnect(ctx.args, {
        onDrop: 'files',
      });
      return <Story args={{ ...args }} />;
    },
  ],
  tags: ['autodocs'],
  title: '3-custom/Components/Dropzone',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Dropzone: IStory = {
  args: {
    children: undefined,
    files: [
      { name: 'Test 1 demi', size: 2400000 },
      { name: 'Test 1 demi', size: 2400000 },
      { name: 'Test 1 demi', size: 2400000 },
      { name: 'Test 1 demi', size: 2400000 },
    ],
    onDrop: (files: FileWithPath[]): void => {
      console.log(files);
    },
  },
};
