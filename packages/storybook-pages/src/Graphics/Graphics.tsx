'use client';

import { PieChart } from '@mantine/charts';
import type { ReactElement } from 'react';

import { pieChartMock } from './Graphics.mock';

/**
 * Example Page of a graphics Mantine components.
 */
export function DocumentDetails(): ReactElement {
  return <PieChart data={pieChartMock} />;
}
