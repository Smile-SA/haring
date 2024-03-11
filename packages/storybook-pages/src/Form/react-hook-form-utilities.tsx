export function withExceptionCapturing<S, T extends unknown[]>(
  fn: (...rest: T) => Promise<S>,
) {
  return (...args: T): void => {
    fn(...args).catch((error): void => {
      // eslint-disable-next-line no-console
      console.log('Unexpected error', error);
    });
  };
}
