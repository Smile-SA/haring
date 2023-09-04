'use client';

import type { BreadcrumbsProps } from '@mantine/core';
import type { ReactNode } from 'react';

import { Breadcrumbs as MantineBreadcrumbs, createStyles } from '@mantine/core';

interface IBreadcrumbsProps extends BreadcrumbsProps {
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
export function Breadcrumbs(props: IBreadcrumbsProps): JSX.Element {
  const { separator = svgSeparator, children, ...BreadcrumbsProps } = props;

  const useStyles = createStyles((theme) => ({
    breadcrumb: {
      '&:first-of-type': {
        fontSize: '16px',
        fontWeight: 600,
      },
      color: theme.colors.dark[6],
      fontSize: '14px',
      fontWeight: 400,
      marginLeft: '1em',
      marginRight: '1em',
      textDecoration: 'none',
      textTransform: 'capitalize',
    },
  }));

  const { classes } = useStyles();

  return (
    <MantineBreadcrumbs
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
