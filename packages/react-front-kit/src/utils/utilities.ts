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
