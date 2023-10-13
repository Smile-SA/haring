'use client';

import type { ReactElement, ReactNode } from 'react';

import {
  Button,
  Card,
  Checkbox,
  Divider,
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

export interface IDocumentReaderProps {
  children?: ReactNode;
}

export function DocumentReader(props: IDocumentReaderProps): ReactElement {
  const { children } = props;
  return (
    <div>
      <MantineProvider theme={primaryTheme}>
        <Card padding="xl" radius="md">
          <Text fw="600" size="lg">
            Générales
          </Text>
          <Space h="md" />
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
        <Card padding="xl" radius="md">
          <Text fw="600" size="lg">
            Métadonnées
          </Text>
          <Space h="md" />
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
        <Card padding="xl" radius="md">
          <Text fw="600" size="lg">
            Accés au document
          </Text>
          <Space h="md" />
          <Group spacing="xs">
            <Button leftIcon={<PencilSimple size={14} weight="bold" />}>
              Editer les droits
            </Button>
            <Button leftIcon={<ShareNetwork size={14} weight="bold" />}>
              Partager en externe
            </Button>
          </Group>
          <Space h="md" />
          <Checkbox label="Accès en mode hors ligne" size="sm" />
        </Card>
        <Space h="xl" />
        <Card padding="xl" radius="md">
          <Text fw="600" size="lg">
            Native
          </Text>
          <Space h="md" />
          <Group>
            <Text>Créer</Text>
            <Text fw={600}>22 mai 2021</Text>
          </Group>
          <Group>
            <Text>Dernière modification</Text>
            <Text fw={600}>22 mai 2021</Text>
          </Group>
          <Group>
            <Text>Créer par</Text>
            <Text fw={600}>22 mai 2021</Text>
          </Group>
          <Group>
            <Text>Modifier par</Text>
            <Text fw={600}>22 mai 2021</Text>
          </Group>
          <Group>
            <Text>Version</Text>
            <Button color="cyan.9" size="compact-sm">
              V2
            </Button>
          </Group>
        </Card>
        <Space h="xl" />
        <Card padding="xl" radius="md">
          <Text fw="600" size="lg">
            Identité
          </Text>
          <Space h="md" />
          <Group>
            <Text>Titre</Text>
            <Text fw={600}>22 mai 2021</Text>
          </Group>
          <Group>
            <Text>Description</Text>
            <Text fw={600}>22 mai 2021</Text>
          </Group>
          <Group>
            <Text>Type de document</Text>
            <Text fw={600}>22 mai 2021</Text>
          </Group>
          <Divider color="cyan.9" my="lg" size="sm" />
          <Group>
            <Text>Titre</Text>
            <Text fw={600}>Facture_Medor</Text>
          </Group>
          <Group>
            <Text>Description</Text>
            <Text fw={600}>-</Text>
          </Group>
          <Group>
            <Text>Type de document</Text>
            <Text fw={600}>Facture</Text>
          </Group>
        </Card>
      </MantineProvider>
      {children}
    </div>
  );
}
