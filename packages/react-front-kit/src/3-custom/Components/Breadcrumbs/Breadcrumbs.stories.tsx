import type { Meta, StoryObj } from '@storybook/react';

import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import { Breadcrumbs as Cmp } from './Breadcrumbs';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/Breadcrumbs',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Breadcrumbs: IStory = {
  args: {
    children: [
      <a key={1} data-testid="Breadcrumbs-first-element" href="test">
        test
      </a>,
      <a key={2} data-testid="Breadcrumbs-second-element" href="test">
        test
      </a>,
      <a key={3} data-testid="Breadcrumbs-last-element" href="test">
        test
      </a>,
    ],
    separator: '>',
    separatorStyle: {
      color: 'grey',
      fontSize: '16px',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('Breadcrumbs')).toBeVisible();
    await expect(
      canvas.getByTestId('Breadcrumbs-second-element')
    ).toBeVisible();
    await expect(canvas.getByTestId('Breadcrumbs-last-element')).toBeVisible();
    await expect(await (await canvas.findAllByText('>')).length).toEqual(2);
  },
};
