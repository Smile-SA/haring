'use client';

import type { ReactElement, ReactNode } from 'react';

import { Button, Card, Checkbox, Divider, Group, Text } from '@mantine/core';
import {
  PencilSimple,
  PencilSimpleLine,
  Plus,
  ShareNetwork,
  TrashSimple,
} from '@phosphor-icons/react';
import { FolderMove } from '@smile/react-front-kit-shared';

export interface IDocumentReaderProps {
  children?: ReactNode;
}

export function DocumentReader(props: IDocumentReaderProps): ReactElement {
  const { children } = props;
  return (
    <div>
      <Card>
        <Text size="lg">Générales</Text>
        <div>
          <Button>
            <FolderMove />
            Déplacer
          </Button>
          <Button>
            <PencilSimple size={14} weight="bold" />
            Editer le contenu
          </Button>
          <Button>
            <PencilSimpleLine size={14} weight="bold" />
            Annoter
          </Button>
          <Button>
            <TrashSimple size={14} weight="bold" />
            Supprimer
          </Button>
        </div>
      </Card>
      <Card>
        <span>Métadonnées</span>
        <div>
          <Button>
            <Button>
              <PencilSimple size={14} weight="bold" />
              Editer les métadonnées
            </Button>
            <Plus size={14} weight="bold" />
            Créer une nouvelle version
          </Button>
        </div>
      </Card>
      <Card>
        <Text size="lg">Accés au document</Text>
        <div>
          <Button>
            <Button>
              <PencilSimple size={14} weight="bold" />
              Editer les droits
            </Button>
            <ShareNetwork size={14} weight="bold" />
            Partager en externe
          </Button>
        </div>
        <Checkbox label="Accès en mode hors ligne" />
      </Card>
      <Card>
        <Text size="lg">Native</Text>
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
          <Button size="compact-sm">V2</Button>
        </Group>
      </Card>
      <Card>
        <Text size="lg">Identité</Text>
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
        <Divider my="sm" />
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
      {children}
    </div>
  );
}
