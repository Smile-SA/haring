import type { IFlattenedItem, ITreeItem, ITreeItems } from './types';
import type { UniqueIdentifier } from '@dnd-kit/core';

import { arrayMove } from '@dnd-kit/sortable';

export const ios = /iPad|iPhone|iPod/.test(navigator.platform);

function getDragDepth(offset: number, indentationWidth: number): number {
  return Math.round(offset / indentationWidth);
}

function getMaxDepth({
  previousItem,
}: {
  previousItem: IFlattenedItem;
}): number {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (previousItem) {
    return previousItem.depth + 1;
  }

  return 0;
}

function getMinDepth({ nextItem }: { nextItem: IFlattenedItem }): number {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (nextItem) {
    return nextItem.depth;
  }

  return 0;
}

export function getProjection(
  items: IFlattenedItem[],
  activeId: UniqueIdentifier,
  overId: UniqueIdentifier,
  dragOffset: number,
  indentationWidth: number,
): {
  depth: number;
  maxDepth: number;
  minDepth: number;
  parentId: UniqueIdentifier | null;
} {
  function getParentId(): UniqueIdentifier | null {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (depth === 0 || !previousItem) {
      return null;
    }

    if (depth === previousItem.depth) {
      return previousItem.parentId;
    }

    if (depth > previousItem.depth) {
      return previousItem.id;
    }

    const newParent = newItems
      .slice(0, overItemIndex)
      .reverse()
      .find((item) => item.depth === depth)?.parentId;

    return newParent ?? null;
  }

  const overItemIndex = items.findIndex(({ id }) => id === overId);
  const activeItemIndex = items.findIndex(({ id }) => id === activeId);
  const activeItem = items[activeItemIndex];
  const newItems = arrayMove(items, activeItemIndex, overItemIndex);
  const previousItem = newItems[overItemIndex - 1];
  const nextItem = newItems[overItemIndex + 1];
  const dragDepth = getDragDepth(dragOffset, indentationWidth);
  const projectedDepth = activeItem.depth + dragDepth;
  const maxDepth = getMaxDepth({
    previousItem,
  });
  const minDepth = getMinDepth({ nextItem });
  let depth = projectedDepth;

  if (projectedDepth >= maxDepth) {
    depth = maxDepth;
  } else if (projectedDepth < minDepth) {
    depth = minDepth;
  }

  return { depth, maxDepth, minDepth, parentId: getParentId() };
}

function flatten(
  items: ITreeItems,
  parentId: UniqueIdentifier | null = null,
  depth = 0,
): IFlattenedItem[] {
  return items.reduce<IFlattenedItem[]>((acc, item, index) => {
    return [
      ...acc,
      { ...item, depth, index, parentId },
      ...flatten(item.children, item.id, depth + 1),
    ];
  }, []);
}

export function flattenTree(items: ITreeItems): IFlattenedItem[] {
  return flatten(items);
}

export function findItem(
  items: ITreeItem[],
  itemId: UniqueIdentifier,
): ITreeItem | undefined {
  return items.find(({ id }) => id === itemId);
}

export function buildTree(flattenedItems: IFlattenedItem[]): ITreeItems {
  const root: ITreeItem = { children: [], id: 'root' };
  const nodes: Record<string, ITreeItem> = { [root.id]: root };
  const items = flattenedItems.map((item) => ({ ...item, children: [] }));

  for (const item of items) {
    const { id, children } = item;
    const parentId = item.parentId ?? root.id;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const parent = nodes[parentId] ?? findItem(items, parentId);

    nodes[id] = { children, id };
    parent.children.push(item);
  }

  return root.children;
}

export function findItemDeep(
  items: ITreeItems,
  itemId: UniqueIdentifier,
): ITreeItem | undefined {
  for (const item of items) {
    const { id, children } = item;

    if (id === itemId) {
      return item;
    }

    if (children.length) {
      const child = findItemDeep(children, itemId);

      if (child) {
        return child;
      }
    }
  }

  return undefined;
}

export function removeItem(
  items: ITreeItems,
  id: UniqueIdentifier,
): ITreeItem[] {
  const newItems = [];

  for (const item of items) {
    if (item.id === id) {
      continue;
    }

    if (item.children.length) {
      item.children = removeItem(item.children, id);
    }

    newItems.push(item);
  }

  return newItems;
}

export function setProperty<T extends keyof ITreeItem>(
  items: ITreeItems,
  id: UniqueIdentifier,
  property: T,
  setter: (value: ITreeItem[T]) => ITreeItem[T],
): ITreeItem[] {
  for (const item of items) {
    if (item.id === id) {
      item[property] = setter(item[property]);
      continue;
    }

    if (item.children.length) {
      item.children = setProperty(item.children, id, property, setter);
    }
  }

  return [...items];
}

function countChildren(items: ITreeItem[], count = 0): number {
  return items.reduce((acc, { children }) => {
    if (children.length) {
      return countChildren(children, acc + 1);
    }

    return acc + 1;
  }, count);
}

export function getChildCount(items: ITreeItems, id: UniqueIdentifier): number {
  const item = findItemDeep(items, id);

  return item ? countChildren(item.children) : 0;
}

export function removeChildrenOf(
  items: IFlattenedItem[],
  ids: UniqueIdentifier[],
): IFlattenedItem[] {
  const excludeParentIds = [...ids];

  return items.filter((item) => {
    if (item.parentId && excludeParentIds.includes(item.parentId)) {
      if (item.children.length) {
        excludeParentIds.push(item.id);
      }
      return false;
    }

    return true;
  });
}
