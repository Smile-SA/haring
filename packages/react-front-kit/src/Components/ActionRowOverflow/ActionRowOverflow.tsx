'use client';

import type { GroupProps, ModalProps } from '@mantine/core';
import type { Record } from '@phosphor-icons/react';
import type {
  IAction,
  IActionConfirmModalProps,
} from '@smile/react-front-kit-shared';
import type { ReactNode } from 'react';

import { ActionIcon, Button, Group, Menu } from '@mantine/core';
import { createStyles } from '@mantine/styles';
import { DotsThreeVertical } from '@phosphor-icons/react';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  actionIconRoot: {
    borderRadius: '32px',
    height: '32px',
    width: '32px',
  },
  buttonIcon: {
    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },
  buttonLabel: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  buttonRoot: {
    [theme.fn.smallerThan('md')]: {
      height: '32px',
      padding: '0',
      width: '32px',
    },
  },
  groupRoot: {
    gap: '8px',
  },
  menuDropdown: {
    borderRadius: '4px',
    minWidth: '200px',
  },
}));

import { ConfirmModal } from '../ConfirmModal/ConfirmModal';

export type IActionRowOverflowAction<Data extends Record<string, unknown>> =
  IAction<Data[]>;

export interface IActionRowOverflowProps<Data extends Record<string, unknown>>
  extends GroupProps {
  actions?: IActionRowOverflowAction<Data>[];
  modalProps?: Omit<ModalProps, 'title'>;
  rowActionNumber?: number;
  selectedElements: Data[];
}

export function ActionRowOverflow<Data extends Record<string, unknown>>(
  props: IActionRowOverflowProps<Data>,
): ReactNode {
  const {
    actions,
    modalProps,
    rowActionNumber,
    selectedElements,
    ...groupProps
  } = props;
  const [confirmAction, setConfirmAction] = useState<IActionConfirmModalProps<
    Data | Data[]
  > | null>(null);
  const visibleRowActions = actions?.slice(0, rowActionNumber);
  const menuRowActions = actions?.slice(rowActionNumber);
  const { classes } = useStyles();

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

  return (
    <>
      {actions && actions.length > 0 ? (
        <Group className={classes.groupRoot} {...groupProps}>
          {visibleRowActions?.map((action) => (
            <Button
              key={action.id}
              classNames={{
                icon: classes.buttonIcon,
                label: classes.buttonLabel,
                root: classes.buttonRoot,
              }}
              color={action.color}
              leftIcon={
                typeof action.icon === 'function'
                  ? action.icon(selectedElements)
                  : action.icon
              }
              onClick={() => handleAction(action)}
              variant={action.color ? 'filled' : 'default'}
            >
              {typeof action.label === 'function'
                ? action.label(selectedElements)
                : action.label}
            </Button>
          ))}
          {menuRowActions?.length !== undefined && menuRowActions.length > 0 ? (
            <Menu classNames={{ dropdown: classes.menuDropdown }} shadow="lg">
              <Menu.Target>
                <ActionIcon
                  className={classes.actionIconRoot}
                  onClick={(e) => e.stopPropagation()}
                  type="button"
                  variant="light"
                >
                  <div>
                    <DotsThreeVertical size={16} weight="bold" />
                  </div>
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown onClick={(e) => e.stopPropagation()}>
                {menuRowActions.map((action, index) => (
                  <Menu.Item
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    color={action.color}
                    icon={
                      typeof action.icon === 'function'
                        ? action.icon(selectedElements)
                        : action.icon
                    }
                    onClick={() => handleAction(action)}
                    {...(typeof action.componentProps === 'function'
                      ? action.componentProps(selectedElements)
                      : action.componentProps)}
                  >
                    {typeof action.label === 'function'
                      ? action.label(selectedElements)
                      : action.label}
                  </Menu.Item>
                ))}
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
