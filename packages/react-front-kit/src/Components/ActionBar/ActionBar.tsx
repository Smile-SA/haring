'use client';

import type { IActionRowOverflowProps } from '../ActionRowOverflow/ActionRowOverflow';
import type { Record } from '@phosphor-icons/react';
import type { ReactElement } from 'react';

import { createStyles, getStylesRef } from '@mantine/styles';

import { ActionRowOverflow } from '../ActionRowOverflow/ActionRowOverflow';

const useStyles = createStyles((theme) => ({
  actionBar: {
    alignItems: 'center',
    background: theme.fn.primaryColor(),
    borderRadius: 4,
    color: theme.white,
    display: 'inline-flex',
    justifyContent: 'space-between',
    padding: '16px 24px',
    ref: getStylesRef('actionBar'),
    width: '100%',
  },
}));

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
  const { classes } = useStyles();

  return (
    <div className={classes.actionBar}>
      <span>{selectedElementsLabel(numberOfSelectedElements)}</span>
      <ActionRowOverflow
        {...actionRowOverflowProps}
        selectedElements={selectedElements}
      />
    </div>
  );
}
