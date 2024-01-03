'use client';

import type { GroupProps, ModalProps } from '@mantine/core';
import type { Record } from '@phosphor-icons/react';
import type {
  IAction,
  IActionConfirmModalProps,
} from '@smile/react-front-kit-shared';
import type { ReactElement } from 'react';

import { ActionIcon, Button, Group, Menu } from '@mantine/core';
import { createStyles } from '@mantine/styles';
import { DotsThreeVertical } from '@phosphor-icons/react';
import { useState } from 'react';

import { ConfirmModal } from '../ConfirmModal/ConfirmModal';

const useStyles = createStyles((theme) => ({
  actionBar: {
    alignItems: 'center',
    background: theme.fn.primaryColor(),
    borderRadius: 4,
    color: theme.white,
    display: 'inline-flex',
    justifyContent: 'space-between',
    padding: '16px 24px',
    width: '100%',
  },
  buttonIcon: {
    [`@media  (max-width: ${theme.breakpoints.sm})`]: {
      marginRight: 0,
    },
  },
  buttonLabel: {
    [`@media  (max-width: ${theme.breakpoints.sm})`]: {
      display: 'none',
    },
  },
  buttonRoot: {
    [`@media  (max-width: ${theme.breakpoints.sm})`]: {
      height: '32px',
      padding: '0',
      width: '32px',
    },
  },
  groupRoot: {
    gap: '8px',
  },
}));

export type IActionBarAction<Data extends Record<string, unknown>> = IAction<
  Data[]
>;

export interface IActionBarProps<Data extends Record<string, unknown>>
  extends GroupProps {
  actions?: IActionBarAction<Data>[];
  actionsOutsideMenu?: number;
  modalProps?: Omit<ModalProps, 'title'>;
  selectedElements: Data[];
  selectedElementsLabel?: (selectedElements: number) => string;
}

export function ActionBar<Data extends Record<string, unknown>>(
  props: IActionBarProps<Data>,
): ReactElement {
  const {
    actions,
    actionsOutsideMenu = 1,
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

  function handleMenuItem(action: IActionBarAction<Data>): void {
    if (action.confirmation) {
      setModal(action);
    } else {
      action.onAction?.(props);
    }
  }

  return (
    <>
      <div className={classes.actionBar}>
        <span>{selectedElementsLabel(numberOfSelectedElements)}</span>
        {actions && actions.length > 0 ? (
          <Group className={classes.groupRoot} {...groupProps}>
            {actions.map(
              (action, index) =>
                index + 1 <= actionsOutsideMenu && (
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
                    onClick={() => handleGridAction(action)}
                    variant={action.color ? 'filled' : 'default'}
                  >
                    {typeof action.label === 'function'
                      ? action.label(selectedElements)
                      : action.label}
                  </Button>
                ),
            )}
            {actions.length > 0 && actionsOutsideMenu < actions.length && (
              <div>
                <Menu radius={4} shadow="lg" width={200}>
                  <Menu.Target>
                    <ActionIcon
                      h={32}
                      onClick={(e) => e.stopPropagation()}
                      radius={30}
                      type="button"
                      variant="light"
                      w={32}
                    >
                      <div>
                        <DotsThreeVertical size={16} weight="bold" />
                      </div>
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown onClick={(e) => e.stopPropagation()}>
                    {actions.map(
                      (action, index) =>
                        index + 1 > actionsOutsideMenu && (
                          <Menu.Item
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                            color={action.color}
                            icon={
                              typeof action.icon === 'function'
                                ? action.icon(props)
                                : action.icon
                            }
                            onClick={() => handleMenuItem(action)}
                            {...(typeof action.componentProps === 'function'
                              ? action.componentProps(props)
                              : action.componentProps)}
                          >
                            {typeof action.label === 'function'
                              ? action.label(props)
                              : action.label}
                          </Menu.Item>
                        ),
                    )}
                  </Menu.Dropdown>
                </Menu>
              </div>
            )}
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
