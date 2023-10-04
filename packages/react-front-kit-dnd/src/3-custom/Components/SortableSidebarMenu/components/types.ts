import type { UniqueIdentifier } from '@dnd-kit/core';
import type { MutableRefObject } from 'react';

export interface ITreeItem {
  children: ITreeItem[];
  collapsed?: boolean;
  id: UniqueIdentifier;
}

export type ITreeItems = ITreeItem[];

export interface IFlattenedItem extends ITreeItem {
  depth: number;
  index: number;
  parentId: UniqueIdentifier | null;
}

export type ISensorContext = MutableRefObject<{
  items: IFlattenedItem[];
  offset: number;
}>;
