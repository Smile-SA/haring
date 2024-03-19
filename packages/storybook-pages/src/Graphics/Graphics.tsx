'use client';

import type { ReactElement } from 'react';

import { AreaChart, BarChart, PieChart } from '@mantine/charts';
import '@mantine/charts/styles.css';
import { Grid, Text } from '@mantine/core';

import {
  areaChartMock,
  barChart2023Mock,
  barChart2024Mock,
  pieChartMock,
} from './Graphics.mock';

/**
 * Example Page of a graphics Mantine components.
 */
export function DocumentDetails(): ReactElement {
  return (
    <Grid maw="1480px" mx="auto" p="20" ta="center">
      <Grid.Col mb={12} span={{ base: 12 }}>
        <Text fw={700} mb={10} size="lg">
          Nombre des demandes par état
        </Text>
        <PieChart
          data={pieChartMock}
          labelsPosition="inside"
          mx="auto"
          withLabels
          withLabelsLine
          withTooltip
        />
      </Grid.Col>
      <Grid.Col mb={12} span={{ base: 12 }}>
        <Text fw={700} mb={10} size="lg">
          Budget de livraison et km parcourus par mois
        </Text>
        <BarChart
          data={barChart2023Mock}
          dataKey="month"
          h={300}
          series={[
            { color: 'violet.6', name: 'Budget (euros)' },
            { color: 'blue.6', name: 'KM' },
          ]}
          tickLine="y"
        />
      </Grid.Col>
      <Grid.Col mb={12} span={{ base: 12 }}>
        <BarChart
          data={barChart2024Mock}
          dataKey="month"
          h={300}
          series={[
            { color: 'violet.6', name: 'Budget (euros)' },
            { color: 'blue.6', name: 'KM' },
          ]}
          tickLine="y"
        />
      </Grid.Col>
      <Grid.Col mb={12} span={{ base: 12 }}>
        <Text fw={700} mb={10} size="lg">
          Progression du CA
        </Text>
        <AreaChart
          data={areaChartMock}
          dataKey="date"
          h={300}
          mx="auto"
          series={[{ color: 'indigo.6', name: 'CA (M€)' }]}
          type="stacked"
        />
      </Grid.Col>
    </Grid>
  );
}
