export interface ITypeMap {
  boolean: boolean;
  number: number;
  string: string;
}

export type IPrimitiveOrConstructor = // 'string' | 'number' | 'boolean' | constructor
  keyof ITypeMap | (new (...args: unknown[]) => unknown);

// infer the guarded type from a specific case of PrimitiveOrConstructor
export type IGuardedType<T extends IPrimitiveOrConstructor> = T extends new (
  ...args: unknown[]
) => infer U
  ? U
  : T extends keyof ITypeMap
    ? ITypeMap[T]
    : never;

export function typeGuard<T extends IPrimitiveOrConstructor>(
  o: unknown,
  className: T,
): o is IGuardedType<T> {
  const localPrimitiveOrConstructor: IPrimitiveOrConstructor = className;
  if (typeof localPrimitiveOrConstructor === 'string') {
    return typeof o === localPrimitiveOrConstructor;
  }
  return o instanceof localPrimitiveOrConstructor;
}
