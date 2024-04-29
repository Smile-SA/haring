'use client';

import type { IConfirmModal } from '@smile/haring-react-shared';
import type { ReactElement } from 'react';

import { Button, Flex, Modal } from '@mantine/core';

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
        close: classes.cross,
        content: classes.modalContent,
        header: classes.modalHeader,
        title: classes.title,
      }}
      onClose={onClose}
      radius={16}
      size="lg"
      title={title}
      {...modalProps}
    >
      <>
        {children}
        <Flex className={classes.modalButtonsContainer} wrap="wrap">
          <Button
            className={classes.buttonLeftModal}
            classNames={{
              root: classes.buttonLeftRoot,
            }}
            color={cancelColor}
            onClick={onCancel}
          >
            {cancelLabel}
          </Button>
          <Button
            classNames={{
              root: classes.buttonRightRoot,
            }}
            color={confirmColor}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </Flex>
      </>
    </Modal>
  );
}
