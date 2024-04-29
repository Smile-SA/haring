'use client';

import type { IActionRowOverflowProps } from '../ActionRowOverflow/ActionRowOverflow';
import type { ReactElement } from 'react';

import { ActionRowOverflow } from '../ActionRowOverflow/ActionRowOverflow';

import classes from './ActionBar.module.css';

export interface IActionBarProps<Data extends Record<string, unknown>>
  extends IActionRowOverflowProps<Data> {
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
      <ActionRowOverflow
        {...actionRowOverflowProps}
        selectedElements={selectedElements}
      />
    </div>
  );
}
