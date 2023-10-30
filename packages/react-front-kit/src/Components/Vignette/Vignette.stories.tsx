import type { Meta, StoryObj } from '@storybook/react';

import {
  DownloadSimple,
  Eye,
  PencilSimple,
  ShareNetwork,
  Star,
  Trash,
} from '@phosphor-icons/react';
import { FolderMove } from '@smile/react-front-kit-shared';
import { action } from '@storybook/addon-actions';

import { Vignette as Cmp } from './Vignette';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/Vignette',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Vignette: IStory = {
  args: {
    action: [
      {
        icon: <FolderMove />,
        label: 'Move in tree',
        onAction: action('Move in tree'),
      },
      {
        icon: <Eye />,
        label: 'Open document',
        onAction: action('Open document'),
      },
      {
        icon: <PencilSimple />,
        label: 'Edit document',
        onAction: action('Edit document'),
      },
      {
        icon: <Star />,
        label: 'Add to favorites',
        onAction: action('Add to favorites'),
      },
      {
        icon: <ShareNetwork />,
        label: 'Share',
        onAction: action('Share'),
      },
      {
        icon: <DownloadSimple />,
        label: 'Download',
        onAction: action('Download'),
      },
      {
        color: 'red',
        icon: <Trash />,
        label: 'Delete',
        onAction: action('Delete'),
      },
    ],
    iconType: 'PDF',
    label: 'Document long and boring for a long exemple of ellipse',
    onClicked: action('onClick'),
    selected: false,
  },
};
