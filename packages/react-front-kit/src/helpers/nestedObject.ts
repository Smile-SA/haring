export type IUniqueIdentifier = number | string;

interface INestedObj<O extends object> {
  children?: INestedObject<O>[];
  id: IUniqueIdentifier;
}

export type INestedObject<O extends object> = INestedObj<O> & O;

interface INestedObjInfo<O extends object> extends INestedObj<O> {
  depth: number;
  index: number;
  parentId: IUniqueIdentifier | null;
  path: IUniqueIdentifier[];
}

export type INestedObjectInfo<O extends object = object> = INestedObjInfo<O> &
  O;

export function flatten<O extends object>(
  arr?: INestedObject<O>[],
  parentId: IUniqueIdentifier | null = null,
  parentPath: IUniqueIdentifier[] = [],
  depth = 0,
): INestedObjectInfo<O>[] {
  if (!arr) {
    return [];
  }
  return arr.reduce<INestedObjectInfo<O>[]>((acc, item, index) => {
    const path = parentPath.concat(item.id);
    return [
      ...acc,
      { ...item, depth, index, parentId, path },
      ...flatten(item.children, item.id, path, depth + 1),
    ];
  }, []);
}

export function addInfo<O extends object>(
  arr: INestedObject<O>[] = [],
  parentId: IUniqueIdentifier | null = null,
  parentPath: IUniqueIdentifier[] = [],
): INestedObjectInfo<O>[] {
  return arr.map((o, index) => {
    const path = parentPath.concat(o.id);
    return {
      ...o,
      children: addInfo(o.children, o.id, path),
      depth: parentPath.length,
      index,
      parentId,
      path,
    };
  });
}

export function removeChildrenOf<O extends object>(
  items: INestedObjectInfo<O>[],
  ids: IUniqueIdentifier[],
): INestedObjectInfo<O>[] {
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
