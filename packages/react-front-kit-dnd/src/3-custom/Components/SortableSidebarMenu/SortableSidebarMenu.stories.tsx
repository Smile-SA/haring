import type { Meta, StoryObj } from '@storybook/react';
import type { ReactElement } from 'react';

import { menu } from '@smile/react-front-kit/src/Components/SidebarMenu/SidebarMenu.mock';
import { useStorybookArgsConnect } from '@smile/react-front-kit-shared/src/storybook-utils';
import { useState } from 'react';

import { SortableSidebarMenu as Cmp } from './SortableSidebarMenu';

const meta = {
  component: Cmp,
  decorators: [
    function Component(Story, ctx) {
      const args = useStorybookArgsConnect(ctx.args, {
        onSelectedChange: 'selectedId',
      });
      return <Story args={{ ...args }} />;
    },
  ],
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

export const SortableSidebarMenu: IStory = {
  args: {
    indicator: true,
    menu,
    openedMenuIds: [1],
  },
  render: (props) => {
    const [openedMenuIds, setOpenedMenuIds] = useState(props.openedMenuIds);
    return (
      <Wrapper>
        <Cmp
          {...props}
          onCollapseChange={(ids) => setOpenedMenuIds(ids)}
          openedMenuIds={openedMenuIds}
        />
      </Wrapper>
    );
  },
};
