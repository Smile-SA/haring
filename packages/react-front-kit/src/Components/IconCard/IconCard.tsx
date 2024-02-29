'use client';

import type { ReactElement, ReactNode } from 'react';

import { Card, CardProps, getThemeColor, useMantineTheme } from '@mantine/core';

import classes from './IconCard.module.css';

export interface IIconCardProps extends CardProps {
  children?: ReactNode;
  color?: string;
  icon?: ReactNode;
  subTitle?: ReactNode;
  title?: ReactNode;
}

export function IconCard(props: IIconCardProps): ReactElement {
  const { children, icon, title, subTitle, color, ...cardProps } = props;
  const theme = useMantineTheme();
  return (
    <Card
      {...cardProps}
      bg={color ? color : getThemeColor(theme.primaryColor, theme)}
      classNames={{ root: classes.root }}
    >
      {Boolean(icon) && <div>{icon}</div>}
      {(Boolean(title) || Boolean(subTitle)) && (
        <div className={classes.titleGroupe}>
          <strong className={classes.title}>{title}</strong>
          <span>{subTitle}</span>
        </div>
      )}
      {Boolean(children) && <div className={classes.children}>{children}</div>}
    </Card>
  );
}
