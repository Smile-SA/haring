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

export type IActionBarAction<Data extends Record<string, unknown>> = IAction<
  Data[]
>;

export interface IActionBarProps<Data extends Record<string, unknown>>
  extends GroupProps {
  actions?: IActionBarAction<Data>[];
  modalProps?: Omit<ModalProps, 'title'>;
  rowActionNumber?: number;
  selectedElements: Data[];
  selectedElementsLabel?: (selectedElements: number) => string;
}

export function ActionBar<Data extends Record<string, unknown>>(
  props: IActionBarProps<Data>,
): ReactElement {
  const {
    actions,
    rowActionNumber = 1,
    modalProps,
    selectedElements,
    selectedElementsLabel = (selectedElements: number) =>
      `${selectedElements} file(s) selected`,
    ...groupProps
  } = props;
  const [confirmAction, setConfirmAction] = useState<IActionConfirmModalProps<
    Data | Data[]
  > | null>(null);
  const visibleRowActions = actions?.slice(0, rowActionNumber);
  const menuRowActions = actions?.slice(rowActionNumber);
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
      action.onAction?.(selectedElements);
    }
  }

  return (
    <>
      <div className={classes.actionBar}>
        <span>{selectedElementsLabel(numberOfSelectedElements)}</span>
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
                onClick={() => handleGridAction(action)}
                variant={action.color ? 'filled' : 'default'}
              >
                {typeof action.label === 'function'
                  ? action.label(selectedElements)
                  : action.label}
              </Button>
            ))}
            {menuRowActions?.length !== undefined &&
            menuRowActions.length > 0 ? (
              <div>
                <Menu
                  classNames={{ dropdown: classes.menuDropdown }}
                  shadow="lg"
                >
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
                        onClick={() => handleMenuItem(action)}
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
              </div>
            ) : null}
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
