import type { Meta, StoryObj } from '@storybook/react';

import { useStorybookArgsConnect } from '@smile/haring-react-shared/storybook-utils';

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
  decorators: [
    function Component(Story, ctx) {
      const args = useStorybookArgsConnect(ctx.args, {
        onDrop: 'files',
        onRemoveFile: (file) => ({
          files: ctx.args.files?.filter((f) => f !== file),
        }),
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
    browseLabel: undefined,
    children: undefined,
    dragLabel: undefined,
    files: [],
  },
};
