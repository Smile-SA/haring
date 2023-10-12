'use client';

import type { DropzoneProps as IMantineDropzoneProps } from '@mantine/dropzone';
import type { ReactElement } from 'react';

import { ActionIcon, Tooltip } from '@mantine/core';
import { Dropzone as MantineDropzone } from '@mantine/dropzone';
import { createStyles } from '@mantine/styles';
import { Eye, Plus, X } from '@phosphor-icons/react';

import { BitByteConverter } from '../BitByteConverter/BitByteConverter';
import { TruncateStringWithEllipsis } from '../TruncateStringWithEllipsis/TruncateStringWithEllipsis';

export interface IFile {
  lastModified: number;
  name: string;
  path: string;
  size: number;
  type: string;
}

export interface IDropzoneProps
  extends Omit<IMantineDropzoneProps, 'children'> {
  browseLabel?: string;
  children?: ReactElement;
  dragLabel?: string;
  files?: IFile[];
  onRemoveFile?: (item: IFile) => void;
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
    browseLabel = 'Browse your device',
    files = [],
    onRemoveFile = () => {
      return null;
    },
    ...MantineDropzoneProps
  } = props;
  const { classes } = useStyles();
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
        title="add button"
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
        {files.map((file) => (
          <Tooltip
            key={`fileCard-${
              Math.floor(Math.random() * 100) +
              file.size +
              Math.floor(Math.random() * 100)
            }`}
            label={file.name}
            position="bottom"
            radius={6}
            withArrow
          >
            <div
              aria-hidden="true"
              className={classes.cardFile}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <ActionIcon
                className={classes.cardFileButtonClose}
                onClick={() => onRemoveFile(file)}
                radius="xl"
                size="sm"
                variant="filled"
              >
                <X size={8} weight="bold" />
              </ActionIcon>
              <span className={classes.cardFileText}>
                <TruncateStringWithEllipsis>
                  {file.name}
                </TruncateStringWithEllipsis>
              </span>
              <span className={classes.cardFileText}>
                <BitByteConverter>{String(file.size)}</BitByteConverter>
              </span>
            </div>
          </Tooltip>
        ))}
      </div>
      {children}
    </MantineDropzone>
  );
}
