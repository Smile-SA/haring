import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

import { sleep } from '@smile/haring-react-shared/storybook-utils';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { ResponsiveTabs as Cmp } from './ResponsiveTabs';
import { contentsMock, tabsMock } from './ResponsiveTabs.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/ResponsiveTabs',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

function Wrapper({ children }: { children: ReactNode }): ReactNode {
  return (
    <div
      style={{
        border: '1px solid darkgrey',
        boxSizing: 'content-box',
        height: 250,
        margin: 'auto',
        overflow: 'hidden',
        padding: 30,
        resize: 'both',
        width: 300,
      }}
    >
      {children}
    </div>
  );
}

export const ResponsiveTabs: IStory = {
  args: {
    children: contentsMock,
    defaultValue: '1',
    tabs: tabsMock,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('First Content')).toBeVisible();
    await sleep(200);
    await userEvent.click(canvas.getAllByTestId('test-tab')[1]);
    await expect(canvas.getByText('Second Content')).toBeVisible();
  },
  render: ({ children, ...props }) => (
    <Wrapper>
      <Cmp {...props}>{children}</Cmp>
    </Wrapper>
  ),
};
