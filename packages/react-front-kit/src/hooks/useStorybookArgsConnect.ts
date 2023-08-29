import { useArgs } from '@storybook/preview-api';

import { isCallback, removeNulls } from '../utils/utilities';

export function useStorybookArgsConnect<T extends Record<string, unknown>>(
  args: T,
  propsToConnect: Record<string, string>
): T {
  const [, setArgs] = useArgs<T>();
  const connectedProps = Object.entries(propsToConnect)
    .map(([key, value]) => {
      const callbackProp: ((e: unknown) => void) | null = isCallback(args[key])
        ? (args[key] as (e: unknown) => void)
        : null;
      return callbackProp !== null
        ? {
            [key]: (v: unknown): void => {
              if (isCallback(callbackProp)) {
                callbackProp?.(v);
                if (args[value] !== undefined) {
                  setArgs({ [value]: v } as Partial<T>);
                }
              }
            },
          }
        : null;
    })
    .filter(removeNulls);
  return { ...args, ...Object.assign({}, ...connectedProps) };
}
