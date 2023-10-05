import type { Meta, StoryObj } from '@storybook/react';
import type { ReactElement } from 'react';

import { SortableTree as Cmp } from './SortableTree';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/SidebarMenu',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

const Wrapper = ({ children }: { children: React.ReactNode }): ReactElement => (
  <div
    style={{
      margin: '0 auto',
      marginTop: '10%',
      maxWidth: 600,
      padding: 10,
    }}
  >
    {children}
  </div>
);

export const DndKitExample: IStory = {
  args: {},
  render: () => (
    <Wrapper>
      <Cmp collapsible indicator removable />
    </Wrapper>
  ),
};
