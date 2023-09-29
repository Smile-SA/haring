'use client';

import type { MantineColor, ModalProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { Button, Modal } from '@mantine/core';

import { useStyles } from './ConfirmModal.style';

export interface IConfirmModalProps extends ModalProps {
  cancelColor?: MantineColor;
  cancelLabel?: string;
  confirmColor?: MantineColor;
  confirmLabel?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  title?: string;
}

export function ConfirmModal(props: IConfirmModalProps): ReactElement {
  const {
    cancelColor = 'gray',
    cancelLabel = 'Cancel',
    confirmColor = 'primary',
    confirmLabel = 'Confirm',
    onCancel,
    onClose,
    onConfirm,
    children,
    title,
    ...modalProps
  } = props;
  const { classes } = useStyles();
  return (
    <Modal
      centered
      classNames={{
        body: classes.modalBody,
        content: classes.modalContent,
        header: classes.modalHeader,
      }}
      onClose={onClose}
      radius={16}
      size="lg"
      {...modalProps}
    >
      <>
        <div className={classes.modalTitleContainer}>
          {Boolean(title) && <h2>{title}</h2>}
          {children}
        </div>
        <div className={classes.modalButtonsContainer}>
          <Button
            className={classes.buttonLeftModal}
            classNames={{
              root: classes.buttonGrey,
            }}
            color={cancelColor}
            onClick={onCancel}
          >
            {cancelLabel}
          </Button>
          <Button
            classNames={{
              root: classes.buttonRemoveRoot,
            }}
            color={confirmColor}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </div>
      </>
    </Modal>
  );
}
