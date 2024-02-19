import type { StoryObj } from '@storybook/react';

import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Card,
  CardSection,
  Flex,
  Group,
  Image,
  Indicator,
  Text,
} from '@mantine/core';
import {
  DownloadSimple,
  Export,
  Eye,
  Note,
  UserCircle,
} from '@phosphor-icons/react';

import { CardHeader, CardList, SummaryBox } from '@smile/react-front-kit';

const meta = {
  component: null,
  tags: ['autodocs'],
  title: '3-custom/Assembly/DashboardCard',
};

export default meta;
type IStory = Omit<StoryObj<typeof meta>, 'args'>;

export const CardListWithButton: IStory = {
  render: () => (
    <Card radius={16}>
      <Card.Section>
        <CardHeader
          leftSection={
            <Note size={38} style={{ marginTop: '12px' }} weight="thin" />
          }
        >
          <>
            <h2>Element de text</h2>
            <p style={{ margin: '0' }}>sous-titre</p>
          </>
        </CardHeader>
      </Card.Section>
      <Card.Section>
        <CardList h="565px">
          <SummaryBox
            titleNode={<strong>Lorem ipsum dolor sit amet</strong>}
            topNode="Le 30 novembre 2023"
          >
            <>
              <Text color="dark.3" mb="10px" size="14px">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis
                blandit aliquet odio urna mi id. Mauris venenatis ut et at amet
                vel est.
              </Text>
              <Flex key={0} style={{ width: '100%' }}>
                <Flex justify="space-between" style={{ width: '100%' }}>
                  <Badge
                    color="green"
                    p="16px"
                    size="lg"
                    style={{ textTransform: 'lowercase' }}
                    variant="light"
                    w="98px"
                  >
                    Validé
                  </Badge>
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
          <SummaryBox
            titleNode={<strong>Lorem ipsum dolor sit amet</strong>}
            topNode={
              <Text
                style={{
                  fontSize: '12px',
                }}
              >
                Le 24 novembre 2023
              </Text>
            }
          >
            <>
              <Text color="dark.3" mb="10px" size="14px">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis
                blandit aliquet odio urna mi id. Mauris venenatis ut et at amet
                vel est.
              </Text>
              <Flex
                key={0}
                style={{
                  width: '100%',
                }}
              >
                <Flex
                  justify="space-between"
                  style={{
                    width: '100%',
                  }}
                >
                  <Badge
                    color="orange.8"
                    p="16px"
                    size="lg"
                    style={{
                      textTransform: 'lowercase',
                    }}
                    variant="light"
                    w="98px"
                  >
                    en cours
                  </Badge>
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
          <SummaryBox
            titleNode={<strong>Lorem ipsum dolor sit amet</strong>}
            topNode={
              <Text
                style={{
                  fontSize: '12px',
                }}
              >
                Le 23 novembre 2023
              </Text>
            }
          >
            <>
              <Text color="dark.3" mb="10px" size="14px">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis
                blandit aliquet odio urna mi id. Mauris venenatis ut et at amet
                vel est.
              </Text>
              <Flex
                key={0}
                style={{
                  width: '100%',
                }}
              >
                <Flex
                  justify="space-between"
                  style={{
                    width: '100%',
                  }}
                >
                  <Badge
                    color="gray"
                    p="16px"
                    size="lg"
                    style={{
                      textTransform: 'lowercase',
                    }}
                    variant="light"
                    w="98px"
                  >
                    en pause
                  </Badge>
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
          <SummaryBox
            titleNode={<strong>Lorem ipsum dolor sit amet</strong>}
            topNode="Le 18 novembre 2023"
          >
            <>
              <Text color="dark.3" mb="10px" size="14px">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis
                blandit aliquet odio urna mi id. Mauris venenatis ut et at amet
                vel est.
              </Text>
              <Flex key={0} style={{ width: '100%' }}>
                <Flex justify="space-between" style={{ width: '100%' }}>
                  <Badge
                    color="green"
                    p="16px"
                    size="lg"
                    style={{ textTransform: 'lowercase' }}
                    variant="light"
                    w="98px"
                  >
                    Validé
                  </Badge>
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

          <SummaryBox
            titleNode={<strong>Lorem ipsum dolor sit amet</strong>}
            topNode={
              <Text
                style={{
                  fontSize: '12px',
                }}
              >
                Le 16 novembre 2023
              </Text>
            }
          >
            <>
              <Text color="dark.3" mb="10px" size="14px">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis
                blandit aliquet odio urna mi id. Mauris venenatis ut et at amet
                vel est.
              </Text>
              <Flex
                key={0}
                style={{
                  width: '100%',
                }}
              >
                <Flex
                  justify="space-between"
                  style={{
                    width: '100%',
                  }}
                >
                  <Badge
                    color="orange.8"
                    p="16px"
                    size="lg"
                    style={{
                      textTransform: 'lowercase',
                    }}
                    variant="light"
                    w="98px"
                  >
                    en cours
                  </Badge>
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
          <SummaryBox
            titleNode={<strong>Lorem ipsum dolor sit amet</strong>}
            topNode={
              <Text
                style={{
                  fontSize: '12px',
                }}
              >
                Le 8 novembre 2023
              </Text>
            }
          >
            <>
              <Text color="dark.3" mb="10px" size="14px">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis
                blandit aliquet odio urna mi id. Mauris venenatis ut et at amet
                vel est.
              </Text>
              <Flex
                key={0}
                style={{
                  width: '100%',
                }}
              >
                <Flex
                  justify="space-between"
                  style={{
                    width: '100%',
                  }}
                >
                  <Badge
                    color="gray"
                    p="16px"
                    size="lg"
                    style={{
                      textTransform: 'lowercase',
                    }}
                    variant="light"
                    w="98px"
                  >
                    en pause
                  </Badge>
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
        </CardList>
      </Card.Section>
      <CardSection p="0px 32px 32px 32px">
        <Button fullWidth>Voir plus</Button>
      </CardSection>
    </Card>
  ),
};

export const CardListWithoutButton: IStory = {
  render: () => (
    <Card radius={16}>
      <Card.Section>
        <CardHeader
          leftSection={
            <Note size={38} style={{ marginTop: '12px' }} weight="thin" />
          }
        >
          <>
            <h2>Element de text</h2>
            <p style={{ margin: '0' }}>sous-titre</p>
          </>
        </CardHeader>
      </Card.Section>
      <Card.Section>
        <CardList h="565px">
          <SummaryBox
            titleNode={<strong>Lorem ipsum dolor sit amet</strong>}
            topNode="Le 30 novembre 2023"
          >
            <>
              <Text color="dark.3" mb="10px" size="14px">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis
                blandit aliquet odio urna mi id. Mauris venenatis ut et at amet
                vel est.
              </Text>
              <Flex key={0} style={{ width: '100%' }}>
                <Flex justify="space-between" style={{ width: '100%' }}>
                  <Badge
                    color="green"
                    p="16px"
                    size="lg"
                    style={{ textTransform: 'lowercase' }}
                    variant="light"
                    w="98px"
                  >
                    Validé
                  </Badge>
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
          <SummaryBox
            titleNode={<strong>Lorem ipsum dolor sit amet</strong>}
            topNode={
              <Text
                style={{
                  fontSize: '12px',
                }}
              >
                Le 24 novembre 2023
              </Text>
            }
          >
            <>
              <Text color="dark.3" mb="10px" size="14px">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis
                blandit aliquet odio urna mi id. Mauris venenatis ut et at amet
                vel est.
              </Text>
              <Flex
                key={0}
                style={{
                  width: '100%',
                }}
              >
                <Flex
                  justify="space-between"
                  style={{
                    width: '100%',
                  }}
                >
                  <Badge
                    color="orange.8"
                    p="16px"
                    size="lg"
                    style={{
                      textTransform: 'lowercase',
                    }}
                    variant="light"
                    w="98px"
                  >
                    en cours
                  </Badge>
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
          <SummaryBox
            titleNode={<strong>Lorem ipsum dolor sit amet</strong>}
            topNode={
              <Text
                style={{
                  fontSize: '12px',
                }}
              >
                Le 23 novembre 2023
              </Text>
            }
          >
            <>
              <Text color="dark.3" mb="10px" size="14px">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis
                blandit aliquet odio urna mi id. Mauris venenatis ut et at amet
                vel est.
              </Text>
              <Flex
                key={0}
                style={{
                  width: '100%',
                }}
              >
                <Flex
                  justify="space-between"
                  style={{
                    width: '100%',
                  }}
                >
                  <Badge
                    color="gray"
                    p="16px"
                    size="lg"
                    style={{
                      textTransform: 'lowercase',
                    }}
                    variant="light"
                    w="98px"
                  >
                    en pause
                  </Badge>
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
          <SummaryBox
            titleNode={<strong>Lorem ipsum dolor sit amet</strong>}
            topNode="Le 18 novembre 2023"
          >
            <>
              <Text color="dark.3" mb="10px" size="14px">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis
                blandit aliquet odio urna mi id. Mauris venenatis ut et at amet
                vel est.
              </Text>
              <Flex key={0} style={{ width: '100%' }}>
                <Flex justify="space-between" style={{ width: '100%' }}>
                  <Badge
                    color="green"
                    p="16px"
                    size="lg"
                    style={{ textTransform: 'lowercase' }}
                    variant="light"
                    w="98px"
                  >
                    Validé
                  </Badge>
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

          <SummaryBox
            titleNode={<strong>Lorem ipsum dolor sit amet</strong>}
            topNode={
              <Text
                style={{
                  fontSize: '12px',
                }}
              >
                Le 16 novembre 2023
              </Text>
            }
          >
            <>
              <Text color="dark.3" mb="10px" size="14px">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis
                blandit aliquet odio urna mi id. Mauris venenatis ut et at amet
                vel est.
              </Text>
              <Flex
                key={0}
                style={{
                  width: '100%',
                }}
              >
                <Flex
                  justify="space-between"
                  style={{
                    width: '100%',
                  }}
                >
                  <Badge
                    color="orange.8"
                    p="16px"
                    size="lg"
                    style={{
                      textTransform: 'lowercase',
                    }}
                    variant="light"
                    w="98px"
                  >
                    en cours
                  </Badge>
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
          <SummaryBox
            titleNode={<strong>Lorem ipsum dolor sit amet</strong>}
            topNode={
              <Text
                style={{
                  fontSize: '12px',
                }}
              >
                Le 8 novembre 2023
              </Text>
            }
          >
            <>
              <Text color="dark.3" mb="10px" size="14px">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis
                blandit aliquet odio urna mi id. Mauris venenatis ut et at amet
                vel est.
              </Text>
              <Flex
                key={0}
                style={{
                  width: '100%',
                }}
              >
                <Flex
                  justify="space-between"
                  style={{
                    width: '100%',
                  }}
                >
                  <Badge
                    color="gray"
                    p="16px"
                    size="lg"
                    style={{
                      textTransform: 'lowercase',
                    }}
                    variant="light"
                    w="98px"
                  >
                    en pause
                  </Badge>
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
        </CardList>
      </Card.Section>
    </Card>
  ),
};

export const CardListNotificationWithButton: IStory = {
  render: () => (
    <Card radius={16}>
      <Card.Section>
        <CardHeader
          leftSection={
            <Note size={38} style={{ marginTop: '12px' }} weight="thin" />
          }
        >
          <>
            <h2>Element de text</h2>
            <p style={{ margin: '0' }}>sous-titre</p>
          </>
        </CardHeader>
      </Card.Section>
      <Card.Section>
        <CardList h="265px">
          <SummaryBox
            leftNode={
              <Indicator color="red" inline offset={8} withBorder>
                <Avatar size={40}>
                  <UserCircle size={40} />
                </Avatar>
              </Indicator>
            }
            topNode={<span>Il y a 3h</span>}
          >
            <span>
              <strong>Simon Leclerc </strong>
              <span>
                dolor sit amet consectetur. Sollicitudin mattis blandit aliquet
                odio urna mi id :
              </span>
              <Text c="cyan" component="span">
                Lorem Ipsum dolor
              </Text>
            </span>
          </SummaryBox>
          <SummaryBox
            leftNode={
              <Indicator color="red" inline offset={8} withBorder>
                <Avatar size={40}>
                  <UserCircle size={40} />
                </Avatar>
              </Indicator>
            }
            topNode={<span>Avant hier</span>}
          >
            <span>
              <strong>Marie Dupont </strong>
              <span>
                dolor sit amet consectetur. Sollicitudin mattis blandit aliquet
                odio urna mi id :
              </span>
              <Text c="cyan" component="span">
                Lorem Ipsum dolor
              </Text>
            </span>
          </SummaryBox>
          <SummaryBox
            leftNode={
              <Indicator color="red" inline offset={8} withBorder>
                <Avatar size={40}>
                  <UserCircle size={40} />
                </Avatar>
              </Indicator>
            }
            topNode={<span>Le 08 décembre 2023</span>}
          >
            <span>
              <strong>Vincent Le Grand </strong>
              <span>
                dolor sit amet consectetur. Sollicitudin mattis blandit aliquet
                odio urna mi id :
              </span>
              <Text c="cyan" component="span">
                Lorem Ipsum dolor
              </Text>
            </span>
          </SummaryBox>
          <SummaryBox
            leftNode={
              <Indicator color="red" inline offset={8} withBorder>
                <Avatar size={40}>
                  <UserCircle size={40} />
                </Avatar>
              </Indicator>
            }
            topNode={<span>Le 05 décembre 2023</span>}
          >
            <span>
              <strong>Robert Maxwell </strong>
              <span>
                dolor sit amet consectetur. Sollicitudin mattis blandit aliquet
                odio urna mi id :
              </span>
              <Text c="cyan" component="span">
                Lorem Ipsum dolor
              </Text>
            </span>
          </SummaryBox>
          <SummaryBox
            leftNode={
              <Indicator color="red" inline offset={8} withBorder>
                <Avatar size={40}>
                  <UserCircle size={40} />
                </Avatar>
              </Indicator>
            }
            topNode={<span>Le 01 décembre 2023</span>}
          >
            <span>
              <strong>Jamie Marcel </strong>
              <span>
                dolor sit amet consectetur. Sollicitudin mattis blandit aliquet
                odio urna mi id :
              </span>
              <Text c="cyan" component="span">
                Lorem Ipsum dolor
              </Text>
            </span>
          </SummaryBox>
          <SummaryBox
            leftNode={
              <Indicator color="red" inline offset={8} withBorder>
                <Avatar size={40}>
                  <UserCircle size={40} />
                </Avatar>
              </Indicator>
            }
            topNode={<span>Le 27 Novembre 2023</span>}
          >
            <span>
              <strong>Robert De Fino </strong>
              <span>
                dolor sit amet consectetur. Sollicitudin mattis blandit aliquet
                odio urna mi id :
              </span>
              <Text c="cyan" component="span">
                Lorem Ipsum dolor
              </Text>
            </span>
          </SummaryBox>
        </CardList>
      </Card.Section>
      <CardSection p="0px 32px 32px 32px">
        <Button fullWidth>Voir plus</Button>
      </CardSection>
    </Card>
  ),
};

export const CardListNotificationWithoutButton: IStory = {
  render: () => (
    <Card radius={16}>
      <Card.Section>
        <CardHeader
          leftSection={
            <Note size={38} style={{ marginTop: '12px' }} weight="thin" />
          }
        >
          <>
            <h2>Element de text</h2>
            <p style={{ margin: '0' }}>sous-titre</p>
          </>
        </CardHeader>
      </Card.Section>
      <Card.Section>
        <CardList h="265px">
          <SummaryBox
            leftNode={
              <Indicator color="red" inline offset={8} withBorder>
                <Avatar size={40}>
                  <UserCircle size={40} />
                </Avatar>
              </Indicator>
            }
            topNode={<span>Il y a 3h</span>}
          >
            <span>
              <strong>Simon Leclerc </strong>
              <span>
                dolor sit amet consectetur. Sollicitudin mattis blandit aliquet
                odio urna mi id :
              </span>
              <Text c="cyan" component="span">
                Lorem Ipsum dolor
              </Text>
            </span>
          </SummaryBox>
          <SummaryBox
            leftNode={
              <Indicator color="red" inline offset={8} withBorder>
                <Avatar size={40}>
                  <UserCircle size={40} />
                </Avatar>
              </Indicator>
            }
            topNode={<span>Avant hier</span>}
          >
            <span>
              <strong>Marie Dupont </strong>
              <span>
                dolor sit amet consectetur. Sollicitudin mattis blandit aliquet
                odio urna mi id :
              </span>
              <Text c="cyan" component="span">
                Lorem Ipsum dolor
              </Text>
            </span>
          </SummaryBox>
          <SummaryBox
            leftNode={
              <Indicator color="red" inline offset={8} withBorder>
                <Avatar size={40}>
                  <UserCircle size={40} />
                </Avatar>
              </Indicator>
            }
            topNode={<span>Le 08 décembre 2023</span>}
          >
            <span>
              <strong>Vincent Le Grand </strong>
              <span>
                dolor sit amet consectetur. Sollicitudin mattis blandit aliquet
                odio urna mi id :
              </span>
              <Text c="cyan" component="span">
                Lorem Ipsum dolor
              </Text>
            </span>
          </SummaryBox>
          <SummaryBox
            leftNode={
              <Indicator color="red" inline offset={8} withBorder>
                <Avatar size={40}>
                  <UserCircle size={40} />
                </Avatar>
              </Indicator>
            }
            topNode={<span>Le 05 décembre 2023</span>}
          >
            <span>
              <strong>Robert Maxwell </strong>
              <span>
                dolor sit amet consectetur. Sollicitudin mattis blandit aliquet
                odio urna mi id :
              </span>
              <Text c="cyan" component="span">
                Lorem Ipsum dolor
              </Text>
            </span>
          </SummaryBox>
          <SummaryBox
            leftNode={
              <Indicator color="red" inline offset={8} withBorder>
                <Avatar size={40}>
                  <UserCircle size={40} />
                </Avatar>
              </Indicator>
            }
            topNode={<span>Le 01 décembre 2023</span>}
          >
            <span>
              <strong>Jamie Marcel </strong>
              <span>
                dolor sit amet consectetur. Sollicitudin mattis blandit aliquet
                odio urna mi id :
              </span>
              <Text c="cyan" component="span">
                Lorem Ipsum dolor
              </Text>
            </span>
          </SummaryBox>
          <SummaryBox
            leftNode={
              <Indicator color="red" inline offset={8} withBorder>
                <Avatar size={40}>
                  <UserCircle size={40} />
                </Avatar>
              </Indicator>
            }
            topNode={<span>Le 27 Novembre 2023</span>}
          >
            <span>
              <strong>Robert De Fino </strong>
              <span>
                dolor sit amet consectetur. Sollicitudin mattis blandit aliquet
                odio urna mi id :
              </span>
              <Text c="cyan" component="span">
                Lorem Ipsum dolor
              </Text>
            </span>
          </SummaryBox>
        </CardList>
      </Card.Section>
    </Card>
  ),
};

export const CardListUpload: IStory = {
  render: () => (
    <Card radius={16}>
      <Card.Section>
        <CardHeader
          leftSection={
            <Note size={38} style={{ marginTop: '12px' }} weight="thin" />
          }
        >
          <>
            <h2>Element de text</h2>
            <p style={{ margin: '0' }}>sous-titre</p>
          </>
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

export const CardSimple: IStory = {
  render: () => (
    <Card padding={0} radius="lg" shadow="sm" withBorder>
      <Card.Section>
        <Image alt="Norway" height={246} src="https://picsum.photos/1301" />
      </Card.Section>
      <Card.Section m="32px">
        <SummaryBox
          titleNode={<strong>Lorem ipsum dolor sit amet</strong>}
          topNode="Le 30 novembre 2023"
        >
          <>
            <Text color="dark.3" mb="10px" size="14px">
              Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis
              blandit aliquet odio urna mi id. Mauris venenatis ut et at amet
              vel est.
            </Text>
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
  ),
};
