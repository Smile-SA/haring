/* eslint-disable react-refresh/only-export-components */
import type {
  IActionRowOverflowAction,
  IDocument,
} from '@smile/react-front-kit';

import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Chip,
  Divider,
  Grid,
  Group,
  Menu,
  Space,
  Text,
} from '@mantine/core';
import {
  DownloadSimple,
  PencilSimple,
  PencilSimpleLine,
  Plus,
  ShareNetwork,
  TrashSimple,
} from '@phosphor-icons/react';
import { DropdownButton } from '@smile/react-front-kit';
import { FolderMove } from '@smile/react-front-kit-shared';
import { action } from '@storybook/addon-actions';

import idCard from '../../assets/example_id_card.png';

export const headerContent = (
  <>
    <a href="#">Espace documentaire</a>
    <a href="#">Espace workflow</a>
    <a href="#">Archives</a>
  </>
);

export const headerLeft = (
  <img alt="logo" height="58" src="./logo.svg" width="128" />
);

export const headerLeftMobile = (
  <img alt="logo" height="44" src="./logo.svg" width="92" />
);

export const headerRightMobile = (
  <DropdownButton label="Mon espace">
    <Menu.Item component="a" href="#">
      Calico
    </Menu.Item>
    <Menu.Item component="a" href="#">
      Espace RH
    </Menu.Item>
    <Menu.Item component="a" href="#">
      Aventure IA
    </Menu.Item>
    <Menu.Item component="a" href="#">
      Lunette & CO
    </Menu.Item>
  </DropdownButton>
);

export const headerRight = (
  <>
    {headerRightMobile}
    <Avatar
      alt="User"
      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
    />
  </>
);

export const searchDocuments: IDocument[] = [
  {
    author: 'Aline Dupon',
    content: (
      <>
        <p>
          Ceci est une description faite pour cette facture et ajoutée par le
          créateur lors de l’import du document dans la GED, en l’absence de
          description cet espace est laissé vide...
        </p>
        <Button color="gray.8" onClick={action('Download file')}>
          <DownloadSimple width={12} />
          <Space w={8} />
          PDF, FR - 1Mo
        </Button>
      </>
    ),
    date: 'Published on December 24, 2023',
    iconType: 'PDF',
    id: 1,
    image: idCard,
    mobilePreviewLabel: 'Afficher le PDF',
    path: '(Customer > 567890456 > Invoices)',
    title: 'Random_File.PDF',
  },
  {
    author: 'Julien Dominique',
    content: (
      <>
        <p>
          Ceci est une description faite pour cette facture et ajoutée par le
          créateur lors de l’import du document dans la GED, en l’absence de
          description cet espace est laissé vide...
        </p>
        <Button color="gray.8" onClick={action('Download file')}>
          <DownloadSimple width={12} />
          <Space w={8} />
          PPT, FR - 1Mo
        </Button>
      </>
    ),
    date: 'Published on December 24, 2023',
    iconType: 'PPT',
    id: 2,
    mobilePreviewLabel: 'Afficher le Powerpoint',
    path: '(Customer > 567890456 > Invoices)',
    title: 'Presentation.PPT',
  },
  {
    author: 'Mohamed Aldri',
    content: (
      <>
        <p>
          Ceci est une description faite pour cette facture et ajoutée par le
          créateur lors de l’import du document dans la GED, en l’absence de
          description cet espace est laissé vide...
        </p>
        <Button color="gray.8" onClick={action('Download file')}>
          <DownloadSimple width={12} />
          <Space w={8} />
          PDF, FR - 1Mo
        </Button>
      </>
    ),
    date: 'Published on December 24, 2023',
    iconType: 'PDF',
    id: 3,
    mobilePreviewLabel: 'Afficher le PDF',
    path: '(Customer > 567890456 > Invoices)',
    title: 'Other_random_File.PDF',
  },
];

export const searchActions: IActionRowOverflowAction<IDocument>[] = [
  {
    icon: <DownloadSimple size={16} />,
    id: 'download',
    isItemAction: false,
    isMassAction: true,
    label: 'Télécharger',
    onAction: action('Download files'),
  },
];

export const CardAction = (
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
);

export const CardMetadata = (
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
);

export const CardNative = (
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
);

export const CardPermissions = (
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
);

export const CardIdentity = (
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
);

export const CardsMetadata = (
  <>
    <>{CardNative}</>
    <Space h="xl" />
    <>{CardIdentity}</>
    <Space h="xl" />
    <Group grow>
      <Button leftIcon={<Plus />}>Nouvelle métadonnées</Button>
    </Group>
  </>
);
