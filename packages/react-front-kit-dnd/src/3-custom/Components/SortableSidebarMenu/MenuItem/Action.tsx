import type {
  CSSProperties,
  ForwardedRef,
  HTMLAttributes,
  ReactElement,
} from 'react';

import { createStyles } from '@mantine/core';
import { forwardRef } from 'react';

const useStyles = createStyles(() => ({
  action: {
    '& svg': {
      fill: '#919eab',
      flex: '0 0 auto',
      height: '100%',
      margin: 'auto',
      overflow: 'visible',
    },
    '&:active': {
      '& svg': {
        fill: 'var(--fill, #788491)',
      },
      backgroundColor: 'var(--background, rgba(0, 0, 0, 0.05))',
    },
    '&:focus-visible': {
      boxShadow: '0 0 0 2px rgba(255, 255, 255, 0), 0 0 0 2px #4c9ffe',
      outline: 'none',
    },
    '-webkit-tap-highlight-color': 'transparent',
    [`@media (hover: hover)`]: {
      '&hover': {
        backgroundColor: 'var(--action-background, rgba(0, 0, 0, 0.05))',
      },
    },
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: 5,
    cursor: 'var(--cursor, pointer)',
    display: 'flex',
    flex: '0 0 auto',
    justifyContent: 'center',
    outline: 'none',
    padding: 15,
    touchAction: 'none',
    width: 12,
  },
}));

export interface IActionProps extends HTMLAttributes<HTMLButtonElement> {
  active?: {
    background: string;
    fill: string;
  };
  cursor?: CSSProperties['cursor'];
}

export const Action = forwardRef(function Action(
  props: IActionProps,
  ref: ForwardedRef<HTMLButtonElement>,
): ReactElement {
  const { active, className, cursor, style, ...rest } = props;
  const { classes } = useStyles();

  return (
    <button
      ref={ref}
      {...rest}
      className={`${classes.action} ${className}`}
      style={
        {
          ...style,
          '--background': active?.background,
          '--fill': active?.fill,
          cursor,
        } as CSSProperties
      }
      tabIndex={0}
      type="button"
    />
  );
});
