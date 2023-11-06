import type { IThumbnailAction } from './Thumbnail';

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

export const thumbnailActions: IThumbnailAction[] = [
  {
    icon: <FolderMove />,
    id: 'move',
    label: 'Move in tree',
    onAction: action('Move in tree'),
  },
  {
    icon: <Eye />,
    id: 'open',
    label: 'Open document',
    onAction: action('Open document'),
  },
  {
    icon: <PencilSimple />,
    id: 'edit',
    label: 'Edit document',
    onAction: action('Edit document'),
  },
  {
    icon: <Star />,
    id: 'favorite',
    label: 'Add to favorites',
    onAction: action('Add to favorites'),
  },
  {
    icon: <ShareNetwork />,
    id: 'share',
    label: 'Share',
    onAction: action('Share'),
  },
  {
    icon: <DownloadSimple />,
    id: 'download',
    label: 'Download',
    onAction: action('Download'),
  },
  {
    color: 'red',
    confirmModalProps: {
      cancelLabel: 'Abort',
      children: <p>Are you sure ?</p>,
      confirmColor: 'red',
      confirmLabel: 'Remove',
      title: 'Remove File',
    },
    confirmation: true,
    icon: <Trash />,
    id: 'delete',
    label: 'Delete',
    onAction: action('Delete'),
  },
];
