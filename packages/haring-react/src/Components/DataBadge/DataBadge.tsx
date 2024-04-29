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
  ratio?: number;
  size?: ISize;
}

export function DataBadge(props: IDataBadgeProps): ReactElement {
  const { children, color, number, size = 'md', ratio, ...badgeProps } = props;

  const theme = useMantineTheme();

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
          style={{ width: `${ratio}%` }}
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
