export function isNotNullNorEmpty<S>(
  value: Record<string, never> | S,
): value is Exclude<S, null | undefined> {
  return (
    value !== null &&
    value !== undefined &&
    (typeof value === 'object' ? Object.keys(value).length !== 0 : true)
  );
}

export function isCallback<T, U>(maybeFunc: T | U): maybeFunc is T {
  return typeof maybeFunc === 'function';
}

export function isObject(value: unknown): value is object {
  return Boolean(value && typeof value === 'object' && !Array.isArray(value));
}

export function findNestedObject(
  object: object,
  keyToMatch: string,
  valueToMatch: string,
): object | null {
  if (isObject(object)) {
    const entries = Object.entries(object);
    for (const element of entries) {
      const [objectKey, objectValue] = element;
      if (objectKey === keyToMatch && objectValue && valueToMatch) {
        return object;
      }
      if (isObject(objectValue)) {
        const child = findNestedObject(objectValue, keyToMatch, valueToMatch);
        if (child !== null) {
          return child;
        }
      }
    }
  }
  return null;
}
