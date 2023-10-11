import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

import { sleep } from '@smile/react-front-kit-shared/src/storybook-utils';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { ResponsiveTabs as Cmp } from './ResponsiveTabs';
import { contents, tabs } from './ResponsiveTabs.mock';

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
        height: 200,
        margin: 'auto',
        overflow: 'hidden',
        resize: 'both',
        width: 320,
      }}
    >
      <div style={{ margin: 20 }}>{children}</div>
    </div>
  );
}

export const ResponsiveTabs: IStory = {
  args: {
    children: contents,
    defaultValue: '1',
    tabs,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('First Content')).toBeVisible();
    await userEvent.click(canvas.getByTestId('test-tab'));
    await sleep(200);
    await expect(canvas.getByText('Second Content')).toBeVisible();
  },
  render: ({ children, ...props }) => (
    <Wrapper>
      <Cmp {...props}>{children}</Cmp>
    </Wrapper>
  ),
};
