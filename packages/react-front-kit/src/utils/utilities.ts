export function isNotNullNotEmpty<S>(
  value: Record<string, never> | S,
): value is Exclude<S, null | undefined> {
  return value != null && Object.keys(value).length !== 0;
}

export function isCallback<T, U>(maybeFunc: T | U): maybeFunc is T {
  return typeof maybeFunc === 'function';
}
