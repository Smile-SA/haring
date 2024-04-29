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

/* Check if value is primitive or class constructor */
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

/* eslint-disable @typescript-eslint/no-explicit-any */
export type ITypeGenericInterface = Record<string, any>;

/* Validate interface typing of given object by verifying if key exist */
export function typeGuardInterface<Type extends ITypeGenericInterface>(
  object: ITypeGenericInterface,
  uniqueKey: number | string,
  keyType?: unknown,
): object is Type {
  return (
    uniqueKey in object &&
    (keyType ? typeof object[uniqueKey] === keyType : true)
  );
}
