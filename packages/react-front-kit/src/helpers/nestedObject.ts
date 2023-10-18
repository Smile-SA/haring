interface IObjectWithChildren {
  children?: IObjectWithChildren[];
  id: number | string;
}

type INestedObject<O extends IObjectWithChildren> = Omit<O, 'children'> & {
  children?: INestedObject<O>[];
  depth: number;
  path: (number | string)[];
};

export function flattenNestedObjects<O extends IObjectWithChildren>(
  arr: O[],
): O[] {
  let children: O[] = [];
  arr.forEach((obj) => {
    if (obj.children && obj.children.length) {
      children = [...children, ...obj.children] as O[];
    }
  });
  return arr.concat(children.length ? flattenNestedObjects(children) : []);
}

export function addPathAndDepth<O extends IObjectWithChildren>(
  arr: O[] = [],
  parentPath: (number | string)[] = [],
): INestedObject<O>[] {
  return arr.map((obj) => {
    const path = parentPath.concat(obj.id);
    return {
      ...obj,
      children: addPathAndDepth(obj.children, path),
      depth: parentPath.length,
      path,
    } as INestedObject<O>;
  });
}

export function setChildrenToTree<O extends IObjectWithChildren>(
  children: O[],
  path: (number | string)[],
  menu?: O[],
): O[] {
  if (path.length === 0) {
    return children;
  }
  const [id, ...nextPath] = path;
  return (
    menu?.map((item) => {
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
