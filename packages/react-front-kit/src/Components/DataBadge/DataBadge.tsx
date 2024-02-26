'use client';

import type { BadgeProps, DefaultMantineColor } from '@mantine/core';
import type { ReactElement } from 'react';

import { Badge, getThemeColor, useMantineTheme } from '@mantine/core';

import classes from './DataBadge.module.css';

type ISize = 'lg' | 'md';

export interface IDataBadgeProps extends Omit<BadgeProps, 'color'> {
  children?: string;
  color?: DefaultMantineColor;
  number?: number;
  numberSize?: 1 | 10 | 100 | 1000;
  size?: ISize;
}

export function DataBadge(props: IDataBadgeProps): ReactElement {
  const {
    children,
    color,
    number = 10,
    size = 'md',
    numberSize = 10,
    ...badgeProps
  } = props;

  const theme = useMantineTheme();

  function getNumberSize(size: ISize): Record<string, string> {
    let value = '40px';

    if (size === 'md') {
      switch (numberSize) {
        case 1:
          value = '12px';
          break;
        case 10:
          value = '24px';
          break;
        case 100:
          value = '35px';
          break;
        case 1000:
          value = '47px';
          break;
      }
    } else {
      switch (numberSize) {
        case 1:
          value = '20px';
          break;
        case 100:
          value = '60px';
          break;
        case 1000:
          value = '80px';
          break;
      }
    }

    return { width: value };
  }

  return (
    <Badge
      autoContrast
      bg={!color ? 'transparent' : undefined}
      className={[classes.root, size === 'md' && classes.rootMd].join(' ')}
      color={color ? color : getThemeColor(theme.colors.dark[3], theme)}
      variant="light"
      {...badgeProps}
    >
      <div className={classes.groupRoot}>
        <span
          className={[classes.number, size === 'md' && classes.numberMd].join(
            ' ',
          )}
          style={getNumberSize(size)}
        >
          {number}
        </span>
        <p
          className={[classes.text, size === 'md' && classes.textMd].join(' ')}
        >
          {children}
        </p>
      </div>
    </Badge>
  );
}
