import { DEFAULT_THEME } from '@mantine/core';

const colorOptions = Object.keys(DEFAULT_THEME.colors);

export const sharedMeta = {
  argTypes: {
    themePrimaryColor: {
      control: 'select',
      options: colorOptions,
    },
    themeSecondaryColor: {
      control: 'select',
      options: colorOptions,
    },
  },
  args: { themePrimaryColor: 'cyan', themeSecondaryColor: 'gray' },
};
