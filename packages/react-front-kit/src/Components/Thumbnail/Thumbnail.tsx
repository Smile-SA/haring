'use client';

import type { IThumbnail, IThumbnailAction } from '../../types';
import type { IActionConfirmModalProps } from '@smile/haring-react-shared';
import type { ReactElement } from 'react';

import {
  ActionIcon,
  Box,
  Group,
  Image,
  Menu,
  Text,
  getThemeColor,
  useMantineTheme,
} from '@mantine/core';
import { DotsThreeVertical } from '@phosphor-icons/react';
import { FileIcon } from '@smile/haring-react-shared';
import { useState } from 'react';

import defaultImage from '../../../assets/defaultImage.jpg';
import { ConfirmModal } from '../ConfirmModal/ConfirmModal';

import classes from './Thumbnail.module.css';

export interface IThumbnailProps extends IThumbnail {
  actions?: IThumbnailAction[];
}

export function Thumbnail(props: IThumbnailProps): ReactElement {
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

  function handleModalButton(onModalAction?: (item: IThumbnail) => void): void {
    onModalAction?.(props);
    handleClose();
  }

  return (
    <>
      <Box
        bg={String(
          selected
            ? getThemeColor(theme.primaryColor, theme)
            : theme.colors.gray[1],
        )}
        className={rootClasses.join(' ')}
        onClick={onClick}
      >
        <Group className={classes.headerContainer}>
          <div className={classes.titleContainer}>
            <FileIcon
              className={classes.fileIcon}
              color={String(
                selected
                  ? theme.colors.gray[1]
                  : getThemeColor(theme.primaryColor, theme),
              )}
              size={22}
              type={iconType}
              weight="bold"
            />
            <Text className={classes.title} component="h3" truncate>
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
                      leftSection={
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
        onCancel={() => handleModalButton(confirmAction?.onCancel)}
        onClose={handleClose}
        onConfirm={() => handleModalButton(confirmAction?.onConfirm)}
        opened={Boolean(confirmAction)}
      >
        {confirmAction?.children}
      </ConfirmModal>
    </>
  );
}
