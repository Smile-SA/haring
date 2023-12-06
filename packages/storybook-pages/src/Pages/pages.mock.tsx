import type { IActionBarAction, IDocument } from '@smile/react-front-kit';

import { Avatar, Button, Menu, Space } from '@mantine/core';
import { DownloadSimple } from '@phosphor-icons/react';
import { DropdownButton } from '@smile/react-front-kit';
import { action } from '@storybook/addon-actions';

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

export const headerRight = (
  <>
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
        <Button color="gray.8">
          <DownloadSimple width={12} />
          <Space w={8} />
          PPT, FR - 1Mo
        </Button>
      </>
    ),
    date: 'Published on December 24, 2023',
    iconType: 'PPT',
    id: 2,
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
        <Button color="gray.8">
          <DownloadSimple width={12} />
          <Space w={8} />
          PDF, FR - 1Mo
        </Button>
      </>
    ),
    date: 'Published on December 24, 2023',
    iconType: 'PDF',
    id: 3,
    path: '(Customer > 567890456 > Invoices)',
    title: 'Other_random_File.PDF',
  },
];

export const searchActions: IActionBarAction<IDocument>[] = [
  {
    icon: <DownloadSimple size={16} />,
    id: 'download',
    isItemAction: false,
    isMassAction: true,
    label: 'Télécharger',
    onAction: action('Download files'),
  },
];
