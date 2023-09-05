import { useArgs } from '@storybook/preview-api';

import { isCallback, isNotNullNotEmpty } from '../utils/utilities';

export function useStorybookArgsConnect<T extends Record<string, unknown>>(
  args: T,
  propsToConnect: Record<string, string>
): T {
  const [, setArgs] = useArgs<T>();
  const connectedProps = Object.entries(propsToConnect)
    .filter(([key]) => isCallback(args[key]))
    .map(([key, value]) => {
      const callbackProp: (e: unknown) => void = args[key] as (
        e: unknown
      ) => void;
      return {
        [key]: (v: unknown): void => {
          callbackProp?.(v);
          if (args[value] !== undefined) {
            setArgs({ [value]: v } as Partial<T>);
          }
        },
      };
    })
    .filter(isNotNullNotEmpty);
  return { ...args, ...Object.assign({}, ...connectedProps) };
}
