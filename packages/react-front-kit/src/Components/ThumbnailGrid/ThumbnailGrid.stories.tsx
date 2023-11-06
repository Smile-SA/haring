import type { Meta, StoryObj } from '@storybook/react';

import { Trash } from '@phosphor-icons/react';
import { FolderMove } from '@smile/react-front-kit-shared';
import { action } from '@storybook/addon-actions';

import { ThumbnailGrid as Cmp } from './ThumbnailGrid';
import { getModalTitle, thumbnails } from './ThumbnailGrid.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/ThumbnailGrid',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ThumbnailGrid: IStory = {
  args: {
    cols: 5,
    gridActions: [
      {
        icon: <FolderMove size={16} />,
        id: 'move',
        label: 'Move in tree',
        onAction: action('Move selected in tree'),
      },
      {
        color: 'red',
        confirmModalProps: {
          cancelLabel: 'Abort',
          children: <p>Are you sure ?</p>,
          confirmColor: 'red',
          confirmLabel: 'Remove',
          title: getModalTitle(
            thumbnails.filter((thumbnail) => thumbnail.selected).length,
          ),
        },
        confirmation: true,
        icon: <Trash size={16} />,
        id: 'delete',
        label: 'Delete',
        onAction: action('Delete selected'),
      },
    ],
    onThumbnailClick: () => action('Thumbnail clicked'),
    spacing: 25,
    thumbnails,
    verticalSpacing: 25,
  },
};
