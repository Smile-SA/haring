'use client';

import type {
  FileWithPath,
  DropzoneProps as IMantineDropzoneProps,
} from '@mantine/dropzone';
import type { MouseEvent, ReactElement } from 'react';

import { ActionIcon, Text, Tooltip } from '@mantine/core';
import { Dropzone as MantineDropzone } from '@mantine/dropzone';
import { Eye, Plus, X } from '@phosphor-icons/react';
import { BitConverter } from '@smile/haring-react';

import classes from './Dropzone.module.css';

export interface IFile extends Partial<FileWithPath> {
  name: string;
}

export interface IDropzoneProps
  extends Omit<IMantineDropzoneProps, 'children'> {
  browseLabel?: string;
  buttonPlusTitle?: string;
  children?: ReactElement;
  dragLabel?: string;
  files?: IFile[];
  onRemoveFile?: (file: IFile) => void;
}

export function Dropzone(props: IDropzoneProps): ReactElement {
  const {
    children,
    dragLabel = 'Drag and drop your documents here',
    buttonPlusTitle = 'Add button',
    browseLabel = 'Browse your device',
    files = [],
    onRemoveFile,
    ...MantineDropzoneProps
  } = props;

  function handleFileClick(e: MouseEvent<HTMLDivElement>): void {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <MantineDropzone
      {...MantineDropzoneProps}
      classNames={{
        inner: classes.dropzoneInner,
        root: classes.dropzoneRoot,
      }}
    >
      <ActionIcon
        className={classes.buttonPlus}
        radius="xl"
        size="xl"
        title={buttonPlusTitle}
        variant="filled"
      >
        <Plus size={20} weight="bold" />
      </ActionIcon>
      <p>{dragLabel}</p>
      <p className={classes.dropzoneBrowse}>
        <Eye className={classes.eye} size={16} weight="bold" />
        {browseLabel}
      </p>
      <div className={classes.cardsFile}>
        {files.map((file, i) => {
          const { name, size } = file;
          return (
            <Tooltip
              key={`${i + i}`}
              label={name}
              position="bottom"
              radius={6}
              withArrow
            >
              <div
                aria-hidden="true"
                className={classes.cardFile}
                onClick={(e) => {
                  handleFileClick(e);
                }}
              >
                {Boolean(onRemoveFile) && (
                  <ActionIcon
                    className={classes.cardFileButtonClose}
                    onClick={() => onRemoveFile?.(file)}
                    radius="xl"
                    size="sm"
                    variant="filled"
                  >
                    <X size={8} weight="bold" />
                  </ActionIcon>
                )}
                <Text className={classes.cardFileText} span truncate>
                  {name}
                </Text>
                {size !== undefined && (
                  <span className={classes.cardFileText}>
                    <BitConverter options={{ locale: 'fr' }} value={size} />
                  </span>
                )}
              </div>
            </Tooltip>
          );
        })}
      </div>
      {children}
    </MantineDropzone>
  );
}
