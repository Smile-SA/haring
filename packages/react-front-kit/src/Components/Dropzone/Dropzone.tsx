'use client';

import type { DropzoneProps as IMantineDropzoneProps } from '@mantine/dropzone';
import type { ReactElement } from 'react';

import { ActionIcon } from '@mantine/core';
import { Dropzone as MantineDropzone } from '@mantine/dropzone';
import { createStyles } from '@mantine/styles';
import { Eye, Plus } from '@phosphor-icons/react';

export type IDropzoneProps = Omit<IMantineDropzoneProps, 'children'>;

const useStyles = createStyles(() => ({
  buttonPlus: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
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
  const { ...MantineDropzoneProps } = props;
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
    </MantineDropzone>
  );
}
