import type { ReactElement } from 'react';

import {
  ActionIcon,
  Badge,
  Button,
  Card,
  CardSection,
  Flex,
  Group,
  Image,
  Text,
} from '@mantine/core';
import {
  DownloadSimple,
  Export,
  Eye,
  Folder,
  Note,
} from '@phosphor-icons/react';
import { CardHeader, CardList } from '@smile/react-front-kit';

const cardListUploadItem = (
  text = 'Ma carte de tiers payant',
): ReactElement => {
  return (
    <Flex align="center" justify="space-between">
      <Text color="dark.6" fw={700} size="14px">
        {text}
      </Text>
      <DownloadSimple color="#0B7285" size={24} />
    </Flex>
  );
};

export const cardListUploadMock = (
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
const contentCardMock = (date = 'Le 30 novembre 2023'): ReactElement => {
  return (
    <>
      <Text fw={400} size="12px">
        {date}
      </Text>
      <Text fw={700} mb="8px" mt="16px" size="14px">
        Lorem ipsum dolor sit amet
      </Text>
      <Text color="dark.3" mb="24px" size="14px">
        Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis blandit
        aliquet odio urna mi id. Mauris venenatis ut et at amet vel est.
      </Text>
    </>
  );
};
export const cardSimpleMock = (
  <Card padding={0} radius="lg" shadow="sm" withBorder>
    <Card.Section>
      <Image alt="Norway" height={246} src="https://picsum.photos/1301" />
    </Card.Section>
    <Card.Section m="32px">
      {contentCardMock()}
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
    </Card.Section>
  </Card>
);
const cardListItemMock = (
  index: number,
  date: string | null,
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
    <Flex key={index} direction="column">
      <div>{date ? contentCardMock(date) : contentCardMock()}</div>
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
  );
};

export const cardListMock = (button = true): ReactElement => {
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
        <CardList h="546px">
          {cardListItemMock(
            0,
            null,
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
          {cardListItemMock(
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
          {cardListItemMock(
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
          {cardListItemMock(
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
          {cardListItemMock(
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
          {cardListItemMock(
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
      {button ? (
        <CardSection p="0px 32px 32px 32px">
          <Button fullWidth>Voir plus</Button>
        </CardSection>
      ) : null}
    </Card>
  );
};
