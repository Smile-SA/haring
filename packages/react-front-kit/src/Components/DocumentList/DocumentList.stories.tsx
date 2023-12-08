import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { actionBarActionsMock } from '../ActionBar/ActionBar.mock';

import { DocumentList as Cmp } from './DocumentList';
import { documentsMock } from './DocumentList.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/DocumentList',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const DocumentList: IStory = {
  args: {
    actions: actionBarActionsMock,
    documents: documentsMock,
    onDocumentSelected: action('Document selected'),
    selectedDocuments: [documentsMock[1]],
  },
};
