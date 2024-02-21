import type { StoryObj } from '@storybook/react';

import { ActionIcon, Card, Flex } from '@mantine/core';
import { CalendarHeader } from '@mantine/dates';
import { DownloadSimple } from '@phosphor-icons/react';

import { CardHeader, CardList, SummaryBox } from '../../../dist';

const meta = {
  component: null,
  tags: ['autodocs'],
  title: '3-custom/Assembly/DashboardCard',
};

export default meta;
type IStory = Omit<StoryObj<typeof meta>, 'args'>;

export const DateCardSimple: IStory = {
  render: () => (
    <Card radius={16}>
      <Card.Section>
        <CardHeader>
          <Flex>
            <CalendarHeader label="Août 2023" mb={0} />
          </Flex>
        </CardHeader>
      </Card.Section>
      <Card.Section>
        <CardList>
          <SummaryBox
            rightNode={
              <ActionIcon color="cyan" size={30} variant="subtle">
                <DownloadSimple size={24} />
              </ActionIcon>
            }
            titleNode={<strong>Ma carte de tiers payant</strong>}
          />
          <SummaryBox
            rightNode={
              <ActionIcon color="cyan" size={30} variant="subtle">
                <DownloadSimple size={24} />
              </ActionIcon>
            }
            titleNode={<strong>Ma facture du 12/12/23</strong>}
          />
          <SummaryBox
            rightNode={
              <ActionIcon color="cyan" size={30} variant="subtle">
                <DownloadSimple size={24} />
              </ActionIcon>
            }
            titleNode={<strong>Mon attestation de domicile</strong>}
          />
        </CardList>
      </Card.Section>
    </Card>
  ),
};
