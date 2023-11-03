'use client';

import type { IConfirmModalProps } from '../ConfirmModal/ConfirmModal';
import type { ReactElement, ReactNode } from 'react';

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
import { useEffect, useState } from 'react';

import { ConfirmModal } from '../ConfirmModal/ConfirmModal';
import { FileExtendType } from '../FileExtendType/FileExtendType';

import { useStyles } from './Thumbnail.style';
import defaultImage from './defaultImage.jpg';

export interface IActionConfirmModalProps
  extends Omit<IConfirmModalProps, 'content' | 'onClose' | 'opened'> {
  content?: ReactElement;
}

export interface IThumbnailAction {
  color?: string;
  confirmModalProps?: IActionConfirmModalProps;
  confirmation?: boolean;
  icon: ReactNode;
  label: string;
  onAction: () => void;
}

export interface IThumbnailProps {
  action?: IThumbnailAction[];
  iconType?: string;
  image?: ReactElement;
  label?: string;
  onClick?: () => void;
  selected?: boolean;
}

export function Thumbnail(props: IThumbnailProps): ReactElement {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const {
    action = [],
    iconType = 'UNKNOWN',
    image = defaultImage,
    label,
    onClick,
    selected = false,
  } = props;

  const [confirmModalContent, setConfirmModalContent] =
    useState<IActionConfirmModalProps | null>(null);

  const [openModal, setOpenModal] = useState<boolean>(false);
  function clearConfirmModalContent(): void {
    setConfirmModalContent(null);
  }

  useEffect(() => {
    !openModal && clearConfirmModalContent();
  }, [openModal]);

  const rootClasses = [classes.root];
  if (selected) {
    rootClasses.push(classes.rootSelected);
    rootClasses.push(classes.titleContainerRootSelected);
    console.log(rootClasses);
  }

  function setModal(action: IThumbnailAction): void {
    setConfirmModalContent({
      cancelColor: action.confirmModalProps?.cancelColor,
      cancelLabel: action.confirmModalProps?.cancelLabel,
      children: action.confirmModalProps?.content,
      confirmColor: action.confirmModalProps?.confirmColor,
      confirmLabel: action.confirmModalProps?.confirmLabel,
      onConfirm: action.onAction,
      title: action.confirmModalProps?.title,
    });
    setOpenModal(true);
  }

  function menuItemHandle(action: IThumbnailAction): void {
    if (action.confirmation) {
      setModal(action);
    } else {
      action.onAction();
    }
  }

  function onCloseHandle(): void {
    setOpenModal(false);
  }
  function onClickModalButtonHandle(onAction?: () => void): void {
    onAction && onAction();
    onCloseHandle();
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
            <FileExtendType
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
            {action.length > 0 && (
              <Menu radius={4} shadow="lg" width={200}>
                <Menu.Target>
                  <ActionIcon
                    className={
                      selected ? classes.menuButtonSelected : classes.menuButton
                    }
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
                <Menu.Dropdown>
                  {action.map((action, index) => (
                    <Menu.Item
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      color={action.color}
                      icon={action.icon}
                      onClick={() => menuItemHandle(action)}
                    >
                      {action.label}
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
        cancelColor={confirmModalContent?.cancelColor}
        cancelLabel={confirmModalContent?.cancelLabel}
        confirmColor={confirmModalContent?.confirmColor}
        confirmLabel={confirmModalContent?.confirmLabel}
        onCancel={() =>
          onClickModalButtonHandle(
            confirmModalContent?.onCancel && confirmModalContent.onCancel,
          )
        }
        onClose={() => onCloseHandle()}
        onConfirm={() =>
          onClickModalButtonHandle(
            confirmModalContent?.onConfirm && confirmModalContent.onConfirm,
          )
        }
        opened={openModal}
        title={confirmModalContent?.title}
      >
        {confirmModalContent?.children}
      </ConfirmModal>
    </>
  );
}
