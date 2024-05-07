'use client';

import type { IActionListProps } from '../ActionList/ActionList';
import type { ReactElement } from 'react';

import { ActionList } from '../ActionList/ActionList';

import classes from './ActionBar.module.css';

export interface IActionBarProps<Data extends Record<string, unknown>>
  extends IActionListProps<Data> {
  selectedElementsLabel?: (selectedElements: number) => string;
}

export function ActionBar<Data extends Record<string, unknown>>(
  props: IActionBarProps<Data>,
): ReactElement {
  const {
    selectedElements,
    selectedElementsLabel = (selectedElements: number) =>
      `${selectedElements} file(s) selected`,
    ...actionRowOverflowProps
  } = props;
  const numberOfSelectedElements = selectedElements.length;

  return (
    <div className={`${classes.actionBar} actionBarRef`}>
      <span>{selectedElementsLabel(numberOfSelectedElements)}</span>
      <ActionList
        {...actionRowOverflowProps}
        selectedElements={selectedElements}
      />
    </div>
  );
}
