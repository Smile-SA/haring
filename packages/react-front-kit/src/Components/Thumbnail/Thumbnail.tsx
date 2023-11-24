'use client';

import type {
  IAction,
  IActionConfirmModalProps,
} from '@smile/react-front-kit-shared';
import type { ReactElement } from 'react';

import {
  ActionIcon,
  Box,
  Group,
  Image,
  Menu,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { DotsThreeVertical } from '@phosphor-icons/react';
import { FileIcon } from '@smile/react-front-kit-shared';
import { useState } from 'react';

import defaultImage from '../../../assets/defaultImage.jpg';
import { ConfirmModal } from '../ConfirmModal/ConfirmModal';

import { useStyles } from './Thumbnail.style';

export interface IThumbnail extends Record<string, unknown> {
  iconType?: string;
  id: number | string;
  image?: string;
  label?: string;
  onClick?: () => void;
  selected?: boolean;
}

export type IThumbnailAction = IAction<IThumbnail>;

export interface IThumbnailProps extends IThumbnail {
  actions?: IThumbnailAction[];
}

export function Thumbnail(props: IThumbnailProps): ReactElement {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const {
    actions = [],
    iconType,
    image = defaultImage,
    label,
    onClick,
    selected = false,
  } = props;

  const [confirmAction, setConfirmAction] =
    useState<IActionConfirmModalProps<IThumbnail> | null>(null);

  function clearConfirmAction(): void {
    setConfirmAction(null);
  }

  const rootClasses = [classes.root];
  if (selected) {
    rootClasses.push(classes.rootSelected);
  }

  function setModal(action: IThumbnailAction): void {
    setConfirmAction({
      cancelColor: action.confirmModalProps?.cancelColor,
      cancelLabel: action.confirmModalProps?.cancelLabel,
      children: action.confirmModalProps?.children,
      confirmColor: action.confirmModalProps?.confirmColor,
      confirmLabel: action.confirmModalProps?.confirmLabel,
      onConfirm: () => action.onAction?.(props),
      title: action.confirmModalProps?.title,
    });
  }

  function handleMenuItem(action: IThumbnailAction): void {
    if (action.confirmation) {
      setModal(action);
    } else {
      action.onAction?.(props);
    }
  }

  function handleClose(): void {
    clearConfirmAction();
  }

  function handleModalButton(onAction?: (item: IThumbnail) => void): void {
    onAction && onAction(props);
    handleClose();
  }

  return (
    <>
      <Box
        bg={String(selected ? theme.primaryColor : theme.colors.gray[1])}
        className={rootClasses.join(' ')}
        onClick={onClick}
      >
        <Group className={classes.headerContainer}>
          <div className={classes.titleContainer}>
            <FileIcon
              className={classes.fileIcon}
              color={String(
                selected ? theme.colors.gray[1] : theme.colors.cyan[9],
              )}
              size={22}
              type={iconType}
              weight="bold"
            />
            <Text component="h3" truncate>
              {label}
            </Text>
          </div>
          <div>
            {actions.length > 0 && (
              <Menu radius={4} shadow="lg" width={200}>
                <Menu.Target>
                  <ActionIcon
                    className={
                      selected ? classes.menuButtonSelected : classes.menuButton
                    }
                    onClick={(e) => e.stopPropagation()}
                    radius={4}
                    type="button"
                  >
                    <div>
                      <DotsThreeVertical
                        className={classes.dotsIcon}
                        size={16}
                        weight="bold"
                      />
                    </div>
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown onClick={(e) => e.stopPropagation()}>
                  {actions.map((action, index) => (
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
                  ))}
                </Menu.Dropdown>
              </Menu>
            )}
          </div>
        </Group>
        <Image radius="16px" src={image} />
      </Box>
      <ConfirmModal
        {...confirmAction}
        onCancel={() =>
          handleModalButton(confirmAction?.onCancel && confirmAction.onCancel)
        }
        onClose={handleClose}
        onConfirm={() =>
          handleModalButton(confirmAction?.onConfirm && confirmAction.onConfirm)
        }
        opened={Boolean(confirmAction)}
      >
        {confirmAction?.children}
      </ConfirmModal>
    </>
  );
}
