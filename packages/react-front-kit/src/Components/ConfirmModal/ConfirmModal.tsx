'use client';

import type { IConfirmModal } from '@smile/react-front-kit-shared';
import type { ReactElement } from 'react';

import { Button, Modal } from '@mantine/core';

import classes from './ConfirmModal.module.css';

export type IConfirmModalProps = IConfirmModal;

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
