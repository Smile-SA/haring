'use client';

import type { ReactElement, ReactNode } from 'react';

import classes from './EventList.module.css';

export interface IEventListProps {
  color?: string;
  description?: ReactNode;
  details?: ReactNode;
  title: ReactNode;
}

export function EventList(props: IEventListProps): ReactElement {
  const { color, description, details, title } = props;
  return (
    <div
      className={classes.itemRoot}
      style={
        color
          ? {
              borderLeft: `8px solid ${color}`,
              paddingLeft: '16px',
            }
          : {}
      }
    >
      {Boolean(title) && <strong className={classes.itemTitle}>{title}</strong>}
      {Boolean(details) && <span>{details}</span>}
      {Boolean(description) && (
        <p className={classes.itemDescription}>{description}</p>
      )}
    </div>
  );
}
