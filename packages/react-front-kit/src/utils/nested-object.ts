interface INestedObject<O extends object> {
  children?: INestedObject<O>[];
  depth?: number;
  id: number | string;
  path?: (number | string)[];
}

export function flattenNestedObjects<O extends object>(
  arr: INestedObject<O>[],
): INestedObject<O>[] {
  let children: INestedObject<O>[] = [];
  arr.forEach((o) => {
    if (o.children && o.children.length) {
      children = [...children, ...o.children];
    }
  });
  return arr.concat(children.length ? flattenNestedObjects(children) : []);
}

export function addPathAndDepth<O extends object>(
  arr: INestedObject<O>[] = [],
  parentPath: (number | string)[] = [],
): INestedObject<O>[] {
  return arr.map((o) => {
    const path = parentPath.concat(o.id);
    return {
      ...o,
      children: addPathAndDepth(o.children, path),
      depth: parentPath.length,
      path,
    };
  });
}
