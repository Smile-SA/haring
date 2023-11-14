'use client';

import type { IThumbnail } from '../Thumbnail/Thumbnail';
import type { SimpleGridProps } from '@mantine/core';
import type {
  IAction,
  IActionConfirmModalProps,
} from '@smile/react-front-kit-shared';
import type { ReactElement } from 'react';

import { Button, Group, SimpleGrid } from '@mantine/core';
import { createStyles } from '@mantine/styles';
import { useState } from 'react';

import { ConfirmModal } from '../ConfirmModal/ConfirmModal';
import { Thumbnail } from '../Thumbnail/Thumbnail';

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  topBar: {
    alignItems: 'center',
    background: theme.fn.primaryColor(),
    borderRadius: 4,
    color: 'white',
    display: 'inline-flex',
    justifyContent: 'space-between',
    padding: '16px 24px',
  },
}));

function defaultSelectedElementsText(n: number): string {
  return `${n} selected file${n > 1 ? 's' : ''}`;
}

type IGridAction = IAction<IThumbnail[]>;
type IGridActionConfirmModalProps = IActionConfirmModalProps<IThumbnail[]>;

export interface IThumbnailGridProps extends SimpleGridProps {
  gridActions?: IGridAction[];
  onThumbnailClick?: (item: IThumbnail, index: number) => void;
  selectedElementsText?: (numberOfSelectedElements: number) => string;
  thumbnails: IThumbnail[];
}

/** Additional props will be forwarded to the [Mantine SimpleGrid component](https://mantine.dev/core/simple-grid) */
export function ThumbnailGrid(props: IThumbnailGridProps): ReactElement {
  const {
    gridActions = [],
    onThumbnailClick,
    selectedElementsText = defaultSelectedElementsText,
    thumbnails,
    ...simpleGridProps
  } = props;

  const selectedElements = thumbnails.filter((thumbnail) => thumbnail.selected);
  const numberOfSelectedElements = selectedElements.length;
  const [confirmAction, setConfirmAction] =
    useState<IGridActionConfirmModalProps | null>(null);

  const { classes } = useStyles();

  function handleSelect(index: number): void {
    onThumbnailClick?.(thumbnails[index], index);
  }

  function setModal(action: IGridAction): void {
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

  function handleGridAction(action: IGridAction): void {
    if (action.confirmation) {
      setModal(action);
    } else {
      action.onAction?.(selectedElements);
    }
  }

  function clearConfirmAction(): void {
    setConfirmAction(null);
  }

  function handleClose(): void {
    clearConfirmAction();
  }

  function handleModalButton(onAction?: (item: IThumbnail[]) => void): void {
    onAction?.(selectedElements);
    handleClose();
  }

  return (
    <>
      <div className={classes.container}>
        {numberOfSelectedElements > 0 && (
          <div className={classes.topBar}>
            <span>{selectedElementsText(numberOfSelectedElements)}</span>
            {gridActions.length > 0 && (
              <Group>
                {gridActions.map((action) => (
                  <Button
                    key={action.id}
                    color={action.color}
                    leftIcon={action.icon}
                    onClick={() => handleGridAction(action)}
                    variant={action.color ? 'filled' : 'default'}
                  >
                    {action.label}
                  </Button>
                ))}
              </Group>
            )}
          </div>
        )}
        <SimpleGrid {...simpleGridProps}>
          {thumbnails.map((thumbnail, index) => (
            <Thumbnail
              key={thumbnail.id}
              onClick={() => handleSelect(index)}
              {...thumbnail}
            />
          ))}
        </SimpleGrid>
      </div>
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
