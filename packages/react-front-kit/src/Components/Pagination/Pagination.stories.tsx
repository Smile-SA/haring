import type { Meta, StoryObj } from '@storybook/react';

import { useStorybookArgsConnect } from '@smile/haring-react-shared/storybook-utils';

import { Pagination as Cmp } from './Pagination';

const meta = {
  component: Cmp,
  decorators: [
    function Component(Story, ctx) {
      const args = useStorybookArgsConnect(ctx.args, {
        onItemsPerPageChange: 'itemsPerPage',
        onPageChange: 'page',
      });
      return <Story args={{ ...args }} />;
    },
  ],
  tags: ['autodocs'],
  title: '3-custom/Components/Pagination',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Pagination: IStory = {
  args: {
    itemsPerPage: 15,
    itemsPerPageAriaLabel: 'Number of results per page',
    itemsPerPageOptions: [
      { label: 'Display 1 result', value: 1 },
      { label: 'Display 5 results', value: 5 },
      { label: 'Display 10 results', value: 10 },
      { label: 'Display 15 results', value: 15 },
    ],
    page: 2,
    totalPages: 10,
  },
};
