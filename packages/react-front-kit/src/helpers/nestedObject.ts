export type IUniqueIdentifier = number | string;

interface INestedObj<O extends object> {
  children?: INestedObject<O>[];
  id: IUniqueIdentifier;
}

export type INestedObject<O extends object> = INestedObj<O> & O;

interface IFlattenedObj<O extends object> extends INestedObj<O> {
  depth: number;
  index: number;
  parentId: IUniqueIdentifier | null;
  path: IUniqueIdentifier[];
}

export type IFlattenedObject<O extends object = object> = IFlattenedObj<O> & O;

export function flatten<O extends object>(
  arr?: INestedObject<O>[],
  parentId: IUniqueIdentifier | null = null,
  parentPath: IUniqueIdentifier[] = [],
  depth = 0,
): IFlattenedObject<O>[] {
  if (!arr) {
    return [];
  }
  return arr.reduce<IFlattenedObject<O>[]>((acc, item, index) => {
    const path = parentPath.concat(item.id);
    return [
      ...acc,
      { ...item, depth, index, parentId, path },
      ...flatten(item.children, item.id, path, depth + 1),
    ];
  }, []);
}

export function removeChildrenOf<O extends object>(
  items: IFlattenedObject<O>[],
  ids: IUniqueIdentifier[],
): IFlattenedObject<O>[] {
  const excludeParentIds = [...ids];

  return items.filter((item) => {
    if (item.parentId && excludeParentIds.includes(item.parentId)) {
      if (item.children?.length) {
        excludeParentIds.push(item.id);
      }
      return false;
    }

    return true;
  });
}
