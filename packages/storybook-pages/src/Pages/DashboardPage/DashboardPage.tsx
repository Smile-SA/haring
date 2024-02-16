'use client';

import type { ReactElement } from 'react';

import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Card,
  CardSection,
  Flex,
  Grid,
  Group,
  Image,
  Indicator,
  Stack,
  Text,
} from '@mantine/core';
import {
  Bell,
  DownloadSimple,
  Export,
  Eye,
  Folder,
  Note,
  UserCircle,
} from '@phosphor-icons/react';
import { CardHeader, CardList, SummaryBox } from '@smile/react-front-kit';

const seeMore = (
  <CardSection p="0px 32px 32px 32px">
    <Button fullWidth>Voir plus</Button>
  </CardSection>
);

const avatar = (
  <Indicator color="red" inline offset={8} withBorder>
    <Avatar size={40}>
      <UserCircle size={40} />
    </Avatar>
  </Indicator>
);

const otherTitle = (name = 'Simon Leclerc'): ReactElement => {
  return (
    <span>
      <b>{name} </b>
      <span>
        dolor sit amet consectetur. Sollicitudin mattis blandit aliquet odio
        urna mi id :
      </span>
      <Text c="cyan" component="span">
        Lorem Ipsum dolor
      </Text>
    </span>
  );
};

const otherTop = (text = 'Il y a 3h'): ReactElement => {
  return <span style={{ color: '#5C5F66', fontSize: 12 }}>{text}</span>;
};

const cardListNotifications = (button = true): ReactElement => {
  return (
    <Card radius={16}>
      <Card.Section>
        <CardHeader
          leftSection={
            <Bell size={38} style={{ marginTop: '12px' }} weight="thin" />
          }
        >
          <>
            <h2 style={{ fontSize: '18px', margin: 0 }}>Notifications</h2>
            <p style={{ margin: '0' }}>sous-titre</p>
          </>
        </CardHeader>
      </Card.Section>
      <Card.Section>
        <CardList h="565px">
          <SummaryBox
            leftNode={avatar}
            titleNode={otherTitle()}
            topNode={otherTop()}
          />
          <SummaryBox
            leftNode={avatar}
            titleNode={otherTitle('Marie Dupont')}
            topNode={otherTop('Avant-hier')}
          />
          <SummaryBox
            leftNode={avatar}
            titleNode={otherTitle('Vincent Le Grand')}
            topNode={otherTop('Le 08 décembre 2023')}
          />
          <SummaryBox
            leftNode={avatar}
            titleNode={otherTitle('Robert Maxwell')}
            topNode={otherTop('Le 05 décembre 2023')}
          />
          <SummaryBox
            leftNode={avatar}
            titleNode={otherTitle('Jamie Marcel')}
            topNode={otherTop('Le 01 décembre 2023')}
          />
          <SummaryBox
            leftNode={avatar}
            titleNode={otherTitle('Robert De Fino')}
            topNode={otherTop('Le 27 Novembre 2023')}
          />
        </CardList>
      </Card.Section>
      {button ? seeMore : null}
    </Card>
  );
};
const cardListUploadItem = (
  text = 'Ma carte de tiers payant',
): ReactElement => {
  return (
    <SummaryBox
      rightNode={
        <ActionIcon color="cyan" size={30} variant="subtle">
          <DownloadSimple size={24} />
        </ActionIcon>
      }
      titleNode={<b>{text}</b>}
    />
  );
};
const cardListUpload = (
  <Card radius={16}>
    <Card.Section>
      <CardHeader
        leftSection={
          <Folder size={38} style={{ marginTop: '12px' }} weight="thin" />
        }
      >
        <>
          <h2 style={{ fontSize: '18px', margin: 0 }}>Mes documents</h2>
          <p style={{ margin: '0' }}>sous-titre</p>
        </>
      </CardHeader>
    </Card.Section>
    <Card.Section>
      <CardList>
        {cardListUploadItem()}
        {cardListUploadItem('Ma facture du 12/12/23')}
        {cardListUploadItem('Mon attestation de domicile')}
      </CardList>
    </Card.Section>
  </Card>
);
const contentCard = (
  <Text color="dark.3" mb="10px" size="14px">
    Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis blandit aliquet
    odio urna mi id. Mauris venenatis ut et at amet vel est.
  </Text>
);

const cardSimple = (
  <Card padding={0} radius="lg" shadow="sm" withBorder>
    <Card.Section>
      <Image alt="Norway" height={246} src="https://picsum.photos/1301" />
    </Card.Section>
    <Card.Section m="32px">
      <SummaryBox
        titleNode={<b>Lorem ipsum dolor sit amet</b>}
        topNode={<Text style={{ fontSize: '12px' }}>Le 30 novembre 2023</Text>}
      >
        <>
          {contentCard}
          <Group>
            <Badge
              color="gray"
              p="16px"
              size="lg"
              style={{ textTransform: 'lowercase' }}
              variant="light"
              w="67px"
            >
              tag
            </Badge>
            <Badge
              color="gray"
              p="16px"
              size="lg"
              style={{ textTransform: 'lowercase' }}
              variant="light"
              w="67px"
            >
              tag
            </Badge>
          </Group>
        </>
      </SummaryBox>
    </Card.Section>
  </Card>
);
const cardListItem = (
  index: number,
  date: string,
  badge = (
    <Badge
      color="gray"
      p="16px"
      size="lg"
      style={{ textTransform: 'lowercase' }}
      variant="light"
      w="98px"
    >
      Validé
    </Badge>
  ),
): ReactElement => {
  return (
    <SummaryBox
      titleNode={<b>Lorem ipsum dolor sit amet</b>}
      topNode={<Text style={{ fontSize: '12px' }}>{date}</Text>}
    >
      <>
        {contentCard}
        <Flex key={index} style={{ width: '100%' }}>
          <Flex justify="space-between" style={{ width: '100%' }}>
            {badge}
            <Flex align="center" gap={16}>
              <ActionIcon color="cyan" size={30} variant="subtle">
                <Export size={24} />
              </ActionIcon>
              <ActionIcon color="cyan" size={30} variant="subtle">
                <Eye size={24} />
              </ActionIcon>
            </Flex>
          </Flex>
        </Flex>
      </>
    </SummaryBox>
  );
};
const cardList = (button = true): ReactElement => {
  return (
    <Card radius={16}>
      <Card.Section>
        <CardHeader
          leftSection={
            <Note size={38} style={{ marginTop: '12px' }} weight="thin" />
          }
        >
          <>
            <h2 style={{ fontSize: '18px', margin: 0 }}>Element de text</h2>
            <p style={{ margin: '0' }}>sous-titre</p>
          </>
        </CardHeader>
      </Card.Section>
      <Card.Section>
        <CardList h="565px">
          {cardListItem(
            0,
            'Le 30 novembre 2023',
            <Badge
              color="green"
              p="16px"
              size="lg"
              style={{ textTransform: 'lowercase' }}
              variant="light"
              w="98px"
            >
              Validé
            </Badge>,
          )}
          {cardListItem(
            1,
            'Le 24 novembre 2023',
            <Badge
              color="orange.8"
              p="16px"
              size="lg"
              style={{ textTransform: 'lowercase' }}
              variant="light"
              w="98px"
            >
              En cours
            </Badge>,
          )}
          {cardListItem(
            2,
            'Le 23 novembre 2023',
            <Badge
              color="gray"
              p="16px"
              size="lg"
              style={{ textTransform: 'lowercase' }}
              variant="light"
              w="98px"
            >
              En pause
            </Badge>,
          )}
          {cardListItem(
            0,
            'Le 18 novembre 2023',
            <Badge
              color="green"
              p="16px"
              size="lg"
              style={{ textTransform: 'lowercase' }}
              variant="light"
              w="98px"
            >
              Validé
            </Badge>,
          )}
          {cardListItem(
            1,
            'Le 16 novembre 2023',
            <Badge
              color="orange.8"
              p="16px"
              size="lg"
              style={{ textTransform: 'lowercase' }}
              variant="light"
              w="98px"
            >
              En cours
            </Badge>,
          )}
          {cardListItem(
            2,
            'Le 8 novembre 2023',
            <Badge
              color="gray"
              p="16px"
              size="lg"
              style={{ textTransform: 'lowercase' }}
              variant="light"
              w="98px"
            >
              En pause
            </Badge>,
          )}
        </CardList>
      </Card.Section>
      {button ? seeMore : null}
    </Card>
  );
};

export function DashboardPage(): ReactElement {
  return (
    <Grid maw="1480px" mx="auto">
      <Grid.Col span={{ base: 12, lg: 4, xs: 6 }}>
        <Stack>
          {cardSimple}
          {cardListUpload}
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4, xs: 6 }}>{cardList()}</Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4, xs: 6 }}>{cardList(false)}</Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4, xs: 6 }}>
        {cardListNotifications()}
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4, xs: 6 }}>
        {cardListNotifications(false)}
      </Grid.Col>
    </Grid>
  );
}
