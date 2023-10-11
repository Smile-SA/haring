'use client';

import type { DropzoneProps as IMantineDropzoneProps } from '@mantine/dropzone';
import type { ReactElement } from 'react';

import { ActionIcon } from '@mantine/core';
import { Dropzone as MantineDropzone } from '@mantine/dropzone';
import { createStyles } from '@mantine/styles';
import { Eye, Plus } from '@phosphor-icons/react';

export interface IDropzoneProps
  extends Omit<IMantineDropzoneProps, 'children'> {
  children?: ReactElement;
  files?: {
    lastModified: number;
    name: string;
    path: string;
    size: number;
    type: string;
  }[];
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
    background: theme.colors.gray[2],
    border: `2px solid ${theme.colors.gray[2]}`,
    borderRadius: '10px',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    height: '70px',
    margin: '10px',
    padding: '10px',
    width: '170px',
  },
  cardFileText: {
    '&:first-of-type': {
      fontWeight: 600,
    },
    display: 'inline-block',
    fontSize: '12px',
    height: 'fit-content',
    margin: 'auto',
    width: 'fit-content',
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
  const { children, files = [], ...MantineDropzoneProps } = props;
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
        variant="filled"
      >
        <Plus size={20} weight="bold" />
      </ActionIcon>
      <p>Drag and drop your documents here</p>
      <p className={classes.dropzoneBrowse}>
        <Eye className={classes.eye} size={16} weight="bold" />
        Browse your device
      </p>
      <div className={classes.cardsFile}>
        {files.map((file) => (
          <div
            key={`fileCard-${
              Math.floor(Math.random() * 100) +
              file.size +
              Math.floor(Math.random() * 100)
            }`}
            className={classes.cardFile}
          >
            <span className={classes.cardFileText}>
              {file.name.length > 15
                ? `${file.name.slice(0, 15)}...`
                : file.name}
            </span>
            <span className={classes.cardFileText}>
              {file.size < 1000000
                ? `${file.size / 1000} KB`
                : file.size > 1000000 && `${file.size / 1000000} MB`}
            </span>
          </div>
        ))}
      </div>
      {children}
    </MantineDropzone>
  );
}
