interface IObjectWithChildren<T extends number | string> {
  children?: IObjectWithChildren<T>[];
  id: T;
}

type INestedObject<
  T extends number | string,
  O extends IObjectWithChildren<T> = IObjectWithChildren<T>,
> = Omit<O, 'children'> & {
  children?: INestedObject<T, O>[];
  depth: number;
  path: (number | string)[];
};

export function flattenNestedObjects<
  T extends number | string,
  O extends IObjectWithChildren<T> = IObjectWithChildren<T>,
>(tree: O[]): O[] {
  let children: O[] = [];
  tree.forEach((obj) => {
    if (obj.children && obj.children.length) {
      children = [...children, ...obj.children] as O[];
    }
  });
  return tree.concat(children.length ? flattenNestedObjects(children) : []);
}

export function addPathAndDepth<
  T extends number | string,
  O extends IObjectWithChildren<T> = IObjectWithChildren<T>,
>(tree: O[] = [], parentPath: T[] = []): INestedObject<T, O>[] {
  return tree.map((obj) => {
    const path = parentPath.concat(obj.id);
    return {
      ...obj,
      children: addPathAndDepth(obj.children, path),
      depth: parentPath.length,
      path,
    } as INestedObject<T, O>;
  });
}

export function setChildrenToTree<
  T extends number | string,
  O extends IObjectWithChildren<T> = IObjectWithChildren<T>,
>(children: O[], path: T[], tree?: O[]): O[] {
  if (path.length === 0) {
    return children;
  }
  const [id, ...nextPath] = path;
  return (
    tree?.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          children: setChildrenToTree(children, nextPath, item.children),
        };
      }
      return item;
    }) ?? []
  );
}

export function getClosestItemFromPath<
  T extends number | string,
  O extends IObjectWithChildren<T> = IObjectWithChildren<T>,
>(tree: O[], path: T[]): O | undefined {
  const [id, ...childrenPath] = path;
  const item = tree.find((item) => item.id === id);
  if (childrenPath.length > 0 && item && item.children) {
    return getClosestItemFromPath(item.children as O[], childrenPath) ?? item;
  }
  return item;
}
