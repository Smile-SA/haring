'use client';

import type { BreadcrumbsProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { Breadcrumbs as MantineBreadcrumbs } from '@mantine/core';

import classes from './Breadcrumbs.module.css';

export interface IBreadcrumbsProps extends BreadcrumbsProps {
  children: ReactNode;
  separator?: string;
}

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
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Additional props will be forwarded to the [Mantine Breadcrumb component](https://mantine.dev/core/breadcrumbs) */
export function Breadcrumbs(props: IBreadcrumbsProps): ReactElement {
  const { separator = svgSeparator, children, ...BreadcrumbsProps } = props;

  return (
    <MantineBreadcrumbs
      className={classes.container}
      classNames={{
        breadcrumb: classes.breadcrumb,
      }}
      data-testid="Breadcrumbs"
      separator={separator}
      {...BreadcrumbsProps}
    >
      {children}
    </MantineBreadcrumbs>
  );
}
