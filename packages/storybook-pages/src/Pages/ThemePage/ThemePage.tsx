'use client';

import type { MantineThemeOverride } from '@mantine/core';
import type { ReactElement } from 'react';

import { Provider } from '@smile/haring-react-shared';

import { DashboardPage } from '../DashboardPage/DashboardPage';

const dsfrColors = {
  blueFrance850: '#e3e3fd',
  blueFrance925: '#e3e3fd',
  blueFrance950: '#ececfe',
  blueFrance975: '#f5f5fe',
  blueFranceMain525: '#6a6af4',
  blueFranceSun113: '#000091',
  greenBourgeon: '#688839',
  greenBourgeonSun: '#E3EDDB',
  grey1000: '#ffffff',
  grey425: '#666666',
  grey850: '#dddddd',
  grey900: '#cecece',
  grey925: '#e5e5e5',
  grey950: '#eeeeee',
  grey975: '#f6f6f6',
  greyMain525: '#7b7b7b',
  redMarianne425: '#c9191e',
  redMarianne850: '#fcbfbf',
  redMarianne925: '#fddede',
  redMarianne950: '#fee9e9',
  redMarianne975: '#fef4f4',
  redMarianneMain472: '#e1000f',
  white: '#FFFFFF',
  yellowTournesol: '#FFD100',
  yellowTournesolSun: '#FFF4CF',
};

const dsfr: MantineThemeOverride = {
  breakpoints: {
    lg: '992px',
    md: '768px',
    sm: '576px',
    xl: '1248px',
  },
  colors: {
    brand: [
      dsfrColors.blueFrance975,
      dsfrColors.blueFrance950,
      dsfrColors.blueFrance925,
      dsfrColors.blueFrance850,
      dsfrColors.blueFranceMain525,
      dsfrColors.blueFranceMain525,
      dsfrColors.blueFranceSun113,
      dsfrColors.blueFranceMain525,
      dsfrColors.blueFranceSun113,
      dsfrColors.blueFranceSun113,
    ],
    green: [
      dsfrColors.greenBourgeonSun,
      dsfrColors.greenBourgeonSun,
      dsfrColors.greenBourgeonSun,
      dsfrColors.greenBourgeonSun,
      dsfrColors.greenBourgeon,
      dsfrColors.greenBourgeon,
      dsfrColors.greenBourgeon,
      dsfrColors.greenBourgeon,
      dsfrColors.greenBourgeon,
      dsfrColors.greenBourgeon,
    ],
    grey: [
      dsfrColors.grey975,
      dsfrColors.grey950,
      dsfrColors.grey925,
      dsfrColors.grey900,
      dsfrColors.grey850,
      dsfrColors.greyMain525,
      dsfrColors.grey425,
      dsfrColors.grey425,
      dsfrColors.grey850,
      dsfrColors.grey1000,
    ],
    red: [
      dsfrColors.redMarianne975,
      dsfrColors.redMarianne950,
      dsfrColors.redMarianne925,
      dsfrColors.redMarianne850,
      dsfrColors.redMarianneMain472,
      dsfrColors.redMarianneMain472,
      dsfrColors.redMarianne425,
      dsfrColors.redMarianne425,
      dsfrColors.redMarianne425,
      dsfrColors.redMarianne425,
    ],
    yellow: [
      dsfrColors.yellowTournesolSun,
      dsfrColors.yellowTournesolSun,
      dsfrColors.yellowTournesolSun,
      dsfrColors.yellowTournesolSun,
      dsfrColors.yellowTournesol,
      dsfrColors.yellowTournesol,
      dsfrColors.yellowTournesol,
      dsfrColors.yellowTournesol,
      dsfrColors.yellowTournesol,
      dsfrColors.yellowTournesol,
    ],
  },
  components: {
    Switch: {
      defaultProps: {
        color: dsfrColors.blueFranceSun113,
      },
    },
  },
  defaultRadius: 0,
  fontFamily: 'Marianne, Arial',
  headings: {
    fontFamily: 'Marianne, Arial',
    sizes: {
      h1: { fontSize: '40px', lineHeight: '48px' },
      h2: { fontSize: '32px', lineHeight: '40px' },
      h3: { fontSize: '28px', lineHeight: '36px' },
      h4: { fontSize: '24px', lineHeight: '32px' },
      h5: { fontSize: '22px', lineHeight: '28px' },
      h6: { fontSize: '20px', lineHeight: '28px' },
    },
  },
  other: {
    dsfrColors,
  },
  primaryColor: 'brand',
  primaryShade: 6,
};

export function ThemePage(): ReactElement {
  return (
    <Provider mainTheme={dsfr}>
      <DashboardPage />
    </Provider>
  );
}
