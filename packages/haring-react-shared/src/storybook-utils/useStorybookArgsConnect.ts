import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';

import { isCallback } from '../helpers';

export function useStorybookArgsConnect<T extends Record<string, unknown>>(
  args: T,
  propsToConnect: Record<
    string,
    Partial<T> | string | ((...params: unknown[]) => Partial<T>)
  >,
): T {
  const [, setArgs] = useArgs<T>();
  const connectedProps = Object.entries(propsToConnect).map(
    ([actionName, prop]) => [
      [actionName],
      (...params: unknown[]): void => {
        if (isCallback(args[actionName])) {
          (args[actionName] as (...params: unknown[]) => unknown)(...params);
        } else {
          action(actionName)(...params);
        }

        if (typeof prop === 'string' && args[prop] !== undefined) {
          // We suppose the value is passed as the first argument in the callback
          setArgs({ [prop]: params[0] } as Partial<T>);
        } else if (typeof prop === 'function') {
          setArgs(prop(...params));
        } else if (typeof prop === 'object') {
          setArgs(prop);
        }
      },
    ],
  );
  return { ...args, ...Object.fromEntries(connectedProps) } as T;
}
