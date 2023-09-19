export type INestedObjectWithDepth<O extends object> = O & {
  children?: INestedObjectWithDepth<O>[];
  depth?: number;
};

export function flattenNestedObjects<O extends object>(
  arr: INestedObjectWithDepth<O>[],
): INestedObjectWithDepth<O>[] {
  let children: INestedObjectWithDepth<O>[] = [];
  const flattened = arr.map((m) => {
    if (m.children && m.children.length) {
      children = [...children, ...m.children];
    }
    return m;
  });
  return flattened.concat(
    children.length ? flattenNestedObjects(children) : children,
  );
}

export function assignDepth<O extends object>(
  arr?: INestedObjectWithDepth<O>[],
  depth = 0,
): INestedObjectWithDepth<O>[] {
  (arr ?? []).forEach((o) => {
    o.depth = depth;
    assignDepth(o.children, depth + 1);
  });
  return arr ?? [];
}
