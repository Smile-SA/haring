'use client';

import type {
  FileWithPath,
  DropzoneProps as IMantineDropzoneProps,
} from '@mantine/dropzone';
import type { MouseEvent, ReactElement } from 'react';

import { ActionIcon, Tooltip } from '@mantine/core';
import { Dropzone as MantineDropzone } from '@mantine/dropzone';
import { createStyles } from '@mantine/styles';
import { Eye, Plus, X } from '@phosphor-icons/react';

import { BitConverter } from '../BitConverter/BitConverter';
import { TruncateString } from '../TruncateString/TruncateString';

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

const useStyles = createStyles((theme) => ({
  buttonPlus: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
  },
  cardFile: {
    background:
      theme.colorScheme === 'dark' ? theme.black : theme.colors.gray[2],
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    height: '70px',
    margin: '10px',
    padding: '10px',
    position: 'relative',
    width: '80px',
  },
  cardFileButtonClose: {
    position: 'absolute',
    right: '-7px',
    top: '-7px',
  },
  cardFileText: {
    '&:first-of-type': {
      fontWeight: 600,
    },
    display: 'inline-block',
    fontSize: '12px',
    height: 'fit-content',
    margin: 'auto',
    width: '100%',
  },
  cardsFile: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  dropzoneBrowse: {
    alignItems: 'center',
    display: 'flex',
    fontWeight: 600,
    justifyContent: 'center',
    marginTop: '0px',
  },
  dropzoneInner: {
    margin: 'auto',
    p: {
      margin: '10px',
    },
    pointerEvents: 'auto',
    textAlign: 'center',
  },
  dropzoneRoot: {
    display: 'flex',
    minHeight: '100%',
    minWidth: '100%',
  },
  eye: { marginRight: '8px' },
}));

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
  const { classes } = useStyles();

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
                <span className={classes.cardFileText}>
                  <TruncateString>{name}</TruncateString>
                </span>
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
