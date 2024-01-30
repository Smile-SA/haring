import type { MantineColorScheme } from '@mantine/core';
import type { StoryContext } from '@storybook/react';

import { useMantineColorScheme } from '@mantine/core';
import { useEffect } from 'react';

interface IColorSchemeProps {
  context: StoryContext;
}

export default function ColorScheme(props: IColorSchemeProps): null {
  const {
    context: {
      globals: { colorScheme },
    },
  } = props;
  const { setColorScheme } = useMantineColorScheme();

  useEffect(() => {
    setColorScheme(colorScheme as MantineColorScheme);
  }, [colorScheme, setColorScheme]);

  return null;
}
