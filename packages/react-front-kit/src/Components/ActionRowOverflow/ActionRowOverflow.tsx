'use client';

import type {
  ButtonProps,
  FloatingPosition,
  GroupProps,
  ModalProps,
  TooltipProps,
} from '@mantine/core';
import type { Record } from '@phosphor-icons/react';
import type {
  IAction,
  IActionConfirmModalProps,
} from '@smile/react-front-kit-shared';
import type { ReactElement, ReactNode } from 'react';

import { ActionIcon, Button, Group, Menu, Tooltip } from '@mantine/core';
import { DotsThreeVertical } from '@phosphor-icons/react';
import { useState } from 'react';

import { ConfirmModal } from '../ConfirmModal/ConfirmModal';

import classes from './ActionRowOverflow.module.css';

const defaultTooltipProps = {
  color: 'gray.7',
  position: 'bottom' as FloatingPosition,
  radius: 6,
  withArrow: true,
};

export type IActionRowOverflowAction<Data extends Record<string, unknown>> =
  IAction<Data[]>;

export interface IActionRowOverflowProps<Data extends Record<string, unknown>>
  extends GroupProps {
  actionButtonProps?: ButtonProps;
  actionTooltipProps?: TooltipProps;
  actions: IActionRowOverflowAction<Data>[];
  isCompactStyle?: boolean;
  modalProps?: Omit<ModalProps, 'title'>;
  overflowMenuLabel?: string;
  rowActionNumber?: number;
  selectedElements: Data[];
}

export function ActionRowOverflow<Data extends Record<string, unknown>>(
  props: IActionRowOverflowProps<Data>,
): ReactNode {
  const {
    actionButtonProps,
    actionTooltipProps,
    actions,
    isCompactStyle = false,
    modalProps,
    overflowMenuLabel = 'Other actions',
    rowActionNumber,
    selectedElements,
    ...groupProps
  } = props;
  const [confirmAction, setConfirmAction] = useState<IActionConfirmModalProps<
    Data | Data[]
  > | null>(null);
  const visibleRowActions = actions.slice(0, rowActionNumber);
  const menuRowActions =
    rowActionNumber !== undefined ? actions.slice(rowActionNumber) : [];

  function setModal(action: IActionRowOverflowAction<Data>): void {
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

  function handleAction(action: IActionRowOverflowAction<Data>): void {
    if (action.confirmation) {
      setModal(action);
    } else {
      action.onAction?.(selectedElements);
    }
  }

  function getActionLabel(action?: IActionRowOverflowAction<Data>): string {
    if (!action) {
      return '';
    }
    return typeof action.label === 'function'
      ? action.label(selectedElements)
      : action.label;
  }

  function getActionIcon(action?: IActionRowOverflowAction<Data>): ReactNode {
    if (!action) {
      return null;
    }
    return typeof action.icon === 'function'
      ? action.icon(selectedElements)
      : action.icon;
  }

  function getActionComponentProps(
    action?: IActionRowOverflowAction<Data>,
  ): Record<string, unknown> | undefined {
    if (!action) {
      return undefined;
    }
    return typeof action.componentProps === 'function'
      ? action.componentProps(selectedElements)
      : action.componentProps;
  }

  const visibleRowAction = (
    action: IActionRowOverflowAction<Data>,
  ): ReactElement =>
    !isCompactStyle ? (
      <Button
        key={action.id}
        classNames={{
          label: classes.buttonLabel,
          root: classes.buttonRoot,
          section: classes.buttonIcon,
        }}
        color={action.color}
        leftSection={getActionIcon(action)}
        onClick={() => handleAction(action)}
        variant={action.color ? 'filled' : 'default'}
        {...getActionComponentProps(action)}
      >
        {getActionLabel(action)}
      </Button>
    ) : (
      <Tooltip
        key={action.id}
        label={getActionLabel(action)}
        {...defaultTooltipProps}
        {...actionTooltipProps}
      >
        <ActionIcon
          aria-label={getActionLabel(action)}
          className={classes.actionIconCompact}
          color={action.color}
          onClick={() => handleAction(action)}
          radius={4}
          type="button"
          variant="subtle"
          {...getActionComponentProps(action)}
        >
          {getActionIcon(action)}
        </ActionIcon>
      </Tooltip>
    );

  const menuRowAction = (
    action: IActionRowOverflowAction<Data>,
  ): ReactElement => (
    <Menu.Item
      key={action.id}
      color={action.color}
      leftSection={getActionIcon(action)}
      onClick={() => handleAction(action)}
      {...getActionComponentProps(action)}
    >
      {getActionLabel(action)}
    </Menu.Item>
  );

  return (
    <>
      {actions.length > 0 ? (
        <Group className={classes.groupRoot} {...groupProps}>
          {visibleRowActions.map((action) => visibleRowAction(action))}
          {menuRowActions.length > 0 ? (
            <Menu
              classNames={{ dropdown: classes.menuDropdown }}
              radius={4}
              shadow="lg"
            >
              <Tooltip
                label={overflowMenuLabel}
                {...defaultTooltipProps}
                {...actionTooltipProps}
              >
                <Menu.Target>
                  <ActionIcon
                    aria-label={overflowMenuLabel}
                    className={
                      isCompactStyle
                        ? classes.actionIconCompact
                        : classes.actionIconDefault
                    }
                    onClick={(e) => e.stopPropagation()}
                    radius={4}
                    type="button"
                    variant={isCompactStyle ? 'subtle' : 'default'}
                  >
                    <DotsThreeVertical size={16} weight="bold" />
                  </ActionIcon>
                </Menu.Target>
              </Tooltip>
              <Menu.Dropdown onClick={(e) => e.stopPropagation()}>
                {menuRowActions.map((action) => menuRowAction(action))}
              </Menu.Dropdown>
            </Menu>
          ) : null}
        </Group>
      ) : null}
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
