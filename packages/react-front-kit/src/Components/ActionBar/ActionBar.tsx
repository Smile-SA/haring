'use client';

import type { GroupProps, ModalProps } from '@mantine/core';
import type { Record } from '@phosphor-icons/react';
import type {
  IAction,
  IActionConfirmModalProps,
} from '@smile/react-front-kit-shared';
import type { ReactElement } from 'react';

import { Button, Group } from '@mantine/core';
import { createStyles } from '@mantine/styles';
import { useState } from 'react';

import { ConfirmModal } from '../ConfirmModal/ConfirmModal';

const useStyles = createStyles((theme) => ({
  actionBar: {
    alignItems: 'center',
    background: theme.fn.primaryColor(),
    borderRadius: 4,
    color: 'white',
    display: 'inline-flex',
    justifyContent: 'space-between',
    padding: '16px 24px',
    width: '100%',
  },
}));

export type IActionBarAction<Data extends Record<string, unknown>> = IAction<
  Data[]
>;

export interface IActionBarProps<Data extends Record<string, unknown>>
  extends GroupProps {
  actions?: IActionBarAction<Data>[];
  modalProps?: Omit<ModalProps, 'title'>;
  selectedElements: Data[];
  selectedElementsLabel?: (selectedElements: number) => string;
}

export function ActionBar<Data extends Record<string, unknown>>(
  props: IActionBarProps<Data>,
): ReactElement {
  const {
    actions,
    modalProps,
    selectedElements,
    selectedElementsLabel = (selectedElements: number) =>
      `${selectedElements} file(s) selected`,
    ...groupProps
  } = props;
  const [confirmAction, setConfirmAction] = useState<IActionConfirmModalProps<
    Data | Data[]
  > | null>(null);
  const numberOfSelectedElements = selectedElements.length;

  const { classes } = useStyles();

  function setModal(action: IActionBarAction<Data>): void {
    setConfirmAction({
      cancelColor: action.confirmModalProps?.cancelColor,
      cancelLabel: action.confirmModalProps?.cancelLabel,
      children: action.confirmModalProps?.children,
      confirmColor: action.confirmModalProps?.confirmColor,
      confirmLabel: action.confirmModalProps?.confirmLabel,
      onConfirm: () => action.onAction?.(selectedElements),
      title: action.confirmModalProps?.title,
    });
  }

  function clearConfirmAction(): void {
    setConfirmAction(null);
  }

  function handleClose(): void {
    clearConfirmAction();
  }

  function handleModalButton(onAction?: (item: Data[]) => void): void {
    onAction?.(selectedElements);
    handleClose();
  }

  function handleGridAction(action: IActionBarAction<Data>): void {
    if (action.confirmation) {
      setModal(action);
    } else {
      action.onAction?.(selectedElements);
    }
  }

  return (
    <>
      <div className={classes.actionBar}>
        <span>{selectedElementsLabel(numberOfSelectedElements)}</span>
        {actions && actions.length > 0 ? (
          <Group {...groupProps}>
            {actions.map((action) => (
              <Button
                key={action.id}
                color={action.color}
                leftIcon={
                  typeof action.icon === 'function'
                    ? action.icon(selectedElements)
                    : action.icon
                }
                onClick={() => handleGridAction(action)}
                variant={action.color ? 'filled' : 'default'}
              >
                {typeof action.label === 'function'
                  ? action.label(selectedElements)
                  : action.label}
              </Button>
            ))}
          </Group>
        ) : null}
      </div>
      <ConfirmModal
        {...confirmAction}
        onCancel={() => handleModalButton(confirmAction?.onCancel)}
        onClose={handleClose}
        onConfirm={() => handleModalButton(confirmAction?.onConfirm)}
        opened={Boolean(confirmAction)}
        {...modalProps}
      >
        {confirmAction?.children}
      </ConfirmModal>
    </>
  );
}
