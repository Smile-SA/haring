'use client';

import type { ICardListProps } from '@smile/react-front-kit';
import type { ReactElement } from 'react';

import { CardList } from '../CardList/CardList';

import classes from './ItemList.module.css';

export interface IItem {
  color?: string;
  description?: string;
  details?: string;
  title: string;
}

export interface IItemListProps extends Omit<ICardListProps, 'children'> {
  items: IItem[];
}

export function ItemList(props: IItemListProps): ReactElement {
  const { items = [], separator = false, ...cardListProps } = props;
  return (
    <CardList {...cardListProps} separator={separator}>
      {items.map((value, index) => {
        return (
          <div
            key={value.title + index.toString()}
            className={classes.itemRoot}
            style={
              value.color
                ? {
                    borderLeft: `8px solid ${value.color}`,
                    paddingLeft: '16px',
                  }
                : {}
            }
          >
            {Boolean(value.title) && (
              <strong className={classes.itemTitle}>{value.title}</strong>
            )}
            {Boolean(value.details) && <span>{value.details}</span>}
            {Boolean(value.description) && (
              <p className={classes.itemDescription}>{value.description}</p>
            )}
          </div>
        );
      })}
    </CardList>
  );
}
