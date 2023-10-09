import type { UniqueIdentifier } from '@dnd-kit/core';
import type {
  IMenuItem,
  IMenuItems,
} from '@smile/react-front-kit/src/Components/SidebarMenu/types';
import type { INestedObjectInfo } from '@smile/react-front-kit/src/helpers';

import { arrayMove } from '@dnd-kit/sortable';

export const ios = /iPad|iPhone|iPod/.test(navigator.platform);

function getDragDepth(offset: number, indentationWidth: number): number {
  return Math.round(offset / indentationWidth);
}

export function getMaxDepth(previousItem?: INestedObjectInfo): number {
  if (previousItem) {
    return previousItem.depth + 1;
  }
  return 0;
}

function getMinDepth(nextItem?: INestedObjectInfo): number {
  if (nextItem) {
    return nextItem.depth;
  }
  return 0;
}

export function getProjection(
  items: INestedObjectInfo[],
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
  const activeItem = items[activeItemIndex] as INestedObjectInfo | undefined;
  const newItems = arrayMove(items, activeItemIndex, overItemIndex);
  const previousItem = newItems[overItemIndex - 1] as
    | INestedObjectInfo
    | undefined;
  const nextItem = newItems[overItemIndex + 1] as INestedObjectInfo | undefined;
  const dragDepth = getDragDepth(dragOffset, indentationWidth);
  // console.log(items, activeItemIndex, activeId, activeItem);
  const projectedDepth = (activeItem?.depth ?? 0) + dragDepth;
  const maxDepth = getMaxDepth(previousItem);
  const minDepth = getMinDepth(nextItem);
  let depth = projectedDepth;

  if (projectedDepth >= maxDepth) {
    depth = maxDepth;
  } else if (projectedDepth < minDepth) {
    depth = minDepth;
  }

  return { depth, maxDepth, minDepth, parentId: getParentId() };
}

export function findItem(
  items: IMenuItem[],
  itemId: UniqueIdentifier,
): IMenuItem | undefined {
  return items.find(({ id }) => id === itemId);
}

export function buildTree(
  flattenedItems: INestedObjectInfo<IMenuItem>[],
): IMenuItems {
  const root: IMenuItem = { children: [], id: 'root' };
  const nodes: Record<string, IMenuItem> = { [root.id]: root };
  const items = flattenedItems.map((item) => ({ ...item, children: [] }));

  for (const item of items) {
    const { id, children } = item;
    const parentId = item.parentId ?? root.id;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const parent = nodes[parentId] ?? findItem(items, parentId);

    nodes[id] = { children, id };
    parent.children?.push(item);
  }

  return root.children ?? [];
}

export function findItemDeep(
  items: IMenuItems,
  itemId: UniqueIdentifier,
): IMenuItem | undefined {
  for (const item of items) {
    const { id, children } = item;

    if (id === itemId) {
      return item;
    }

    if (children?.length) {
      const child = findItemDeep(children, itemId);

      if (child) {
        return child;
      }
    }
  }

  return undefined;
}

export function removeItem(
  items: IMenuItems,
  id: UniqueIdentifier,
): IMenuItem[] {
  const newItems = [];

  for (const item of items) {
    if (item.id === id) {
      continue;
    }

    if (item.children?.length) {
      item.children = removeItem(item.children, id);
    }

    newItems.push(item);
  }

  return newItems;
}

export function setProperty<T extends keyof IMenuItem>(
  items: IMenuItems,
  id: UniqueIdentifier,
  property: T,
  setter: (value: IMenuItem[T]) => IMenuItem[T],
): IMenuItem[] {
  for (const item of items) {
    if (item.id === id) {
      item[property] = setter(item[property]);
      continue;
    }

    if (item.children?.length) {
      item.children = setProperty(item.children, id, property, setter);
    }
  }

  return [...items];
}

function countChildren(items: IMenuItem[], count = 0): number {
  return items.reduce((acc, { children }) => {
    if (children?.length) {
      return countChildren(children, acc + 1);
    }

    return acc + 1;
  }, count);
}

export function getChildCount(items: IMenuItems, id: UniqueIdentifier): number {
  const item = findItemDeep(items, id);

  return item && item.children ? countChildren(item.children) : 0;
}
