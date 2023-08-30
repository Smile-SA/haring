'use client';

import type { BreadcrumbsProps } from '@mantine/core';
import type { ReactNode } from 'react';

import { Breadcrumbs as MantineBreadcrumbs, createStyles } from '@mantine/core';

interface IBreadcrumbsProps extends BreadcrumbsProps {
  children: ReactNode;
  separatorStyle?: object;
}

export function Breadcrumbs(props: IBreadcrumbsProps): JSX.Element {
  const { separator, separatorStyle, children } = props;

  const useStyles = createStyles(() => ({
    separator: {
      ...separatorStyle,
    },
  }));

  const { classes } = useStyles();

  const svgSeparator = (
    <svg
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.25 10.5L8.75 7L5.25 3.5"
        stroke="#0B7285"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <MantineBreadcrumbs
      classNames={{ separator: classes.separator }}
      separator={separator ? separator : svgSeparator}
    >
      <a>a</a>
      <a>a</a>
      <a>a</a>
      {children}
    </MantineBreadcrumbs>
  );
}
