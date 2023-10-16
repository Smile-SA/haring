'use client';

import type { ReactElement, ReactNode } from 'react';

import {
  Button,
  Card,
  Checkbox,
  Chip,
  Divider,
  Grid,
  Group,
  MantineProvider,
  Space,
  Text,
} from '@mantine/core';
import {
  PencilSimple,
  PencilSimpleLine,
  Plus,
  ShareNetwork,
  TrashSimple,
} from '@phosphor-icons/react';
import { FolderMove, primaryTheme } from '@smile/react-front-kit-shared';

const theme = primaryTheme;

theme.colorScheme = 'dark';

export interface IDocumentDetailsProps {
  children?: ReactNode;
}

export function DocumentDetails(props: IDocumentDetailsProps): ReactElement {
  const { children } = props;
  return (
    <div>
      <MantineProvider theme={primaryTheme}>
        <Card padding="40px" radius="lg">
          <Text fw="600" size="lg" span>
            Générales
          </Text>
          <Space h="lg" />
          <Group spacing="xs">
            <Button leftIcon={<FolderMove />}>Déplacer</Button>
            <Button leftIcon={<PencilSimple size={14} weight="bold" />}>
              Editer le contenu
            </Button>
            <Button leftIcon={<PencilSimpleLine size={14} weight="bold" />}>
              Annoter
            </Button>
            <Button leftIcon={<TrashSimple size={14} weight="bold" />}>
              Supprimer
            </Button>
          </Group>
        </Card>
        <Space h="xl" />
        <Card padding="40px" radius="lg">
          <Text fw="600" size="lg" span>
            Métadonnées
          </Text>
          <Space h="lg" />
          <Group spacing="xs">
            <Button leftIcon={<PencilSimple size={14} weight="bold" />}>
              Editer les métadonnées
            </Button>
            <Button leftIcon={<Plus size={14} weight="bold" />}>
              Créer une nouvelle version
            </Button>
          </Group>
        </Card>
        <Space h="xl" />
        <Card padding="40px" radius="lg">
          <Text fw="600" size="lg" span>
            Accés au document
          </Text>
          <Space h="lg" />
          <Group spacing="xs">
            <Button leftIcon={<PencilSimple size={14} weight="bold" />}>
              Editer les droits
            </Button>
            <Button leftIcon={<ShareNetwork size={14} weight="bold" />}>
              Partager en externe
            </Button>
          </Group>
          <Space h="lg" />
          <Checkbox label="Accès en mode hors ligne" size="sm" />
        </Card>
        <Space h="xl" />
        <Card padding="40px" radius="lg">
          <Text fw="600" size="lg" span>
            Native
          </Text>
          <Space h="lg" />
          <Group grow pb="md">
            <Grid>
              <Grid.Col maw="200px" pb="sm" pt="0" sm={3}>
                <Text span>Créer</Text>
              </Grid.Col>
              <Grid.Col pb="sm" pt="0" sm={3}>
                <Text fw={600} span>
                  22 mai 2021
                </Text>
              </Grid.Col>
            </Grid>
          </Group>
          <Group grow pb="md">
            <Grid>
              <Grid.Col maw="200px" pb="sm" pt="0" sm={3}>
                <Text span>Dernière modification</Text>
              </Grid.Col>
              <Grid.Col pb="sm" pt="0" sm={3}>
                <Text fw={600} span>
                  22 mai 2021
                </Text>
              </Grid.Col>
            </Grid>
          </Group>
          <Group grow pb="md">
            <Grid>
              <Grid.Col maw="200px" pb="sm" pt="0" sm={3}>
                <Text span>Créer par</Text>
              </Grid.Col>
              <Grid.Col pb="sm" pt="0" sm={3}>
                <Text fw={600} span>
                  22 mai 2021
                </Text>
              </Grid.Col>
            </Grid>
          </Group>
          <Group grow pb="md">
            <Grid>
              <Grid.Col maw="200px" pb="sm" pt="0" sm={3}>
                <Text span>Modifier par</Text>
              </Grid.Col>
              <Grid.Col pb="sm" pt="0" sm={3}>
                <Text fw={600} span>
                  22 mai 2021
                </Text>
              </Grid.Col>
            </Grid>
          </Group>
          <Group grow>
            <Grid>
              <Grid.Col maw="200px" pb="sm" pt="0" sm={3}>
                <Text span>Version</Text>
              </Grid.Col>
              <Grid.Col pb="sm" pt="0" sm={3}>
                <Chip checked size="sm" variant="outline">
                  V2
                </Chip>
              </Grid.Col>
            </Grid>
          </Group>
        </Card>
        <Space h="xl" />
        <Card padding="40px 40px" radius="lg">
          <Text fw="600" size="lg" span>
            Identité
          </Text>
          <Space h="lg" />
          <Group grow pb="md">
            <Grid>
              <Grid.Col maw="200px" pb="sm" pt="0" sm={3}>
                <Text span>Titre</Text>
              </Grid.Col>
              <Grid.Col pb="sm" pt="0" sm={3}>
                <Text fw={600} span>
                  22 mai 2021
                </Text>
              </Grid.Col>
            </Grid>
          </Group>
          <Group grow pb="md">
            <Grid>
              <Grid.Col maw="200px" pb="sm" pt="0" sm={3}>
                <Text span>Description</Text>
              </Grid.Col>
              <Grid.Col pb="sm" pt="0" sm={3}>
                <Text fw={600} span>
                  22 mai 2021
                </Text>
              </Grid.Col>
            </Grid>
          </Group>
          <Group grow pb="md">
            <Grid>
              <Grid.Col maw="200px" pb="sm" pt="0" sm={3}>
                <Text span>Type de document</Text>
              </Grid.Col>
              <Grid.Col pb="sm" pt="0" sm={3}>
                <Text fw={600} span>
                  22 mai 2021
                </Text>
              </Grid.Col>
            </Grid>
          </Group>
          <Divider color="cyan.9" my="lg" size="sm" />
          <Group grow pb="md" pt="md">
            <Grid>
              <Grid.Col maw="200px" pb="sm" sm={3}>
                <Text span>Titre</Text>
              </Grid.Col>
              <Grid.Col pb="sm" sm={3}>
                <Text fw={600} span>
                  Facture_Medor
                </Text>
              </Grid.Col>
            </Grid>
          </Group>
          <Group grow pb="md">
            <Grid>
              <Grid.Col maw="200px" pb="sm" pt="0" sm={3}>
                <Text span>Description</Text>
              </Grid.Col>
              <Grid.Col pb="sm" pt="0" sm={3}>
                <Text fw={600} span>
                  -
                </Text>
              </Grid.Col>
            </Grid>
          </Group>
          <Group grow>
            <Grid>
              <Grid.Col maw="200px" pb="sm" pt="0" sm={3}>
                <Text span>Type de document</Text>
              </Grid.Col>
              <Grid.Col pb="sm" pt="0" sm={3}>
                <Text fw={600} span>
                  Facture
                </Text>
              </Grid.Col>
            </Grid>
          </Group>
        </Card>
      </MantineProvider>
      {children}
    </div>
  );
}
