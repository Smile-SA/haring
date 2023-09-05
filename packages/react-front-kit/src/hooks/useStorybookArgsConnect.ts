import { useArgs } from '@storybook/preview-api';

import { isCallback } from '../utils/utilities';

export function useStorybookArgsConnect<T extends Record<string, unknown>>(
  args: T,
  propsToConnect: Record<string, string>
): T {
  const [, setArgs] = useArgs<T>();
  const connectedProps = Object.entries(propsToConnect)
    .filter(([action]) => isCallback(args[action]))
    .map(([action, prop]) => [
      [action],
      (...params: unknown[]): void => {
        (args[action] as (...params: unknown[]) => void)?.(...params);
        if (args[prop] !== undefined) {
          // We suppose the value is passed as the first argument in the callback
          setArgs({ [prop]: params[0] } as Partial<T>);
        }
      },
    ]);
  return { ...args, ...Object.fromEntries(connectedProps) };
}
