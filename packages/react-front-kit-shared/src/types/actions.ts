import type { MantineColor, ModalProps } from '@mantine/core';
import type { ReactNode } from 'react';

export interface IConfirmModal extends Omit<ModalProps, 'title'> {
  cancelColor?: MantineColor;
  cancelLabel?: string;
  confirmColor?: MantineColor;
  confirmLabel?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  title?: string;
}

export interface IActionConfirmModalProps<Item>
  extends Omit<IConfirmModal, 'onCancel' | 'onClose' | 'onConfirm' | 'opened'> {
  onCancel?: (item: Item) => false | void;
  onClose?: () => void;
  onConfirm?: (item: Item) => false | void;
}

export interface IAction<Item> {
  color?: string;
  confirmModalProps?: IActionConfirmModalProps<Item>;
  confirmation?: boolean;
  icon: ReactNode;
  id: number | string;
  isItemAction?: boolean;
  isMassAction?: boolean;
  label: string;
  onAction?: (item: Item) => void;
}

export interface IConfirmAction<Item> extends IAction<Item> {
  item: Item;
}
