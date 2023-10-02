import type { Meta, StoryObj } from '@storybook/react';

import { useStorybookArgsConnect } from '@smile/react-front-kit-shared/src/storybook-utils';

import { Pagination as Cmp } from './Pagination';

const meta = {
  component: Cmp,
  decorators: [
    function Component(Story, ctx) {
      const args = useStorybookArgsConnect(ctx.args, {
        onPageChange: 'page',
        onRowsPerPageChange: 'rowsPerPage',
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
    page: 2,
    rowsPerPage: 15,
    rowsPerPageLabel: 'Number of results per page',
    rowsPerPageOptions: [
      { label: 'Display 1 result', value: 1 },
      { label: 'Display 5 results', value: 5 },
      { label: 'Display 10 results', value: 10 },
      { label: 'Display 15 results', value: 15 },
    ],
    totalPages: 10,
  },
};
