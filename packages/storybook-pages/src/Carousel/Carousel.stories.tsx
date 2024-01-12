import type { Meta, StoryObj } from '@storybook/react';

import { Carousel as MantineCarousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const meta = {
  argTypes: {},
  component: MantineCarousel,
  title: '2-mantine/Carousel',
} satisfies Meta<typeof MantineCarousel>;

export default meta;
type IStory = StoryObj<typeof meta>;
export const Carousel: IStory = {
  args: {},
  render: () => (
    <MantineCarousel height={400} maw={812} withIndicators>
      <MantineCarousel.Slide>
        <Image src="https://picsum.photos/1300" />
      </MantineCarousel.Slide>
      <MantineCarousel.Slide>
        <Image src="https://picsum.photos/1301" />
      </MantineCarousel.Slide>
      <MantineCarousel.Slide>
        <Image src="https://picsum.photos/1302" />
      </MantineCarousel.Slide>
      <MantineCarousel.Slide>
        <Image src="https://picsum.photos/1303" />
      </MantineCarousel.Slide>
    </MantineCarousel>
  ),
};
