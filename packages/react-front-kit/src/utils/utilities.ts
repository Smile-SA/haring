export function isNotNullNotEmpty<S>(
  value: S | undefined | Record<string, never>
): value is Exclude<S, null> {
  return value != null && Object.keys(value).length !== 0;
}

export function isCallback<T>(maybeFunc: T | unknown): maybeFunc is T {
  return typeof maybeFunc === 'function';
}
