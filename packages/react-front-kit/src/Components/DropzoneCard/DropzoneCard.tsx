'use client';

import type { ActionIconProps, BoxProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { ActionIcon, Box } from '@mantine/core';
import { Dropzone, PDF_MIME_TYPE } from '@mantine/dropzone';
import { createStyles } from '@mantine/styles';
import { Eye, Plus } from '@phosphor-icons/react';

import Motif from './Motif';

interface IContentItem {
  icon?: ReactElement;
  iconProps?: Partial<ActionIconProps>;
  label?: string;
  onAction?: (item: IContentItem) => void;
}

interface IDropzoneCardProps extends BoxProps {
  children?: ReactElement;
  content?: ReactElement;
  contentItems?: IContentItem[];
  motif?: ReactElement;
  title?: ReactElement;
}

const useStyles = createStyles(() => ({
  container: {
    '@media (max-width: 834px)': {
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content',
    },
    display: 'flex',
    flexWarp: 'wrap',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 1,
  },
  contentItem: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    marginRight: '16px',
  },
  contentItemGroup: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'left',
    marginBottom: '20px',
    paddingRight: '20px',
    width: '220px',
  },
  contentItems: {
    '@media (max-width: 834px)': {
      minWidth: '0px',
    },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
    minWidth: '440px',
  },
  dropzoneBrowse: {
    alignItems: 'center',
    display: 'flex',
    fontWeight: 600,
    justifyContent: 'center',
    marginTop: '0px',
  },
  dropzoneContainer: {
    '@media (max-width: 834px)': {
      marginTop: '24px',
      maxWidth: '100%',
    },
    marginTop: '18px',
    width: '100%',
  },
  dropzoneContentItem: {
    '@media (max-width: 640px)': {
      padding: '20px 20px',
    },
    borderRadius: '16px',
    minHeight: '219px',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
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
  leftContainer: {
    marginRight: '20px',
    maxWidth: '440px',
  },
  motif: {
    left: -40,
    position: 'absolute',
    top: -60,
    zIndex: 0,
  },
  title: {
    'h1, h2, h3, h4 h5, p': {
      fontSize: '26px',
      fontWeight: 700,
      marginBottom: '24px',
    },
  },
}));

export function DropzoneCard(props: IDropzoneCardProps): ReactElement {
  const {
    content,
    title,
    contentItems = [],
    motif = <Motif />,
    ...BoxProps
  } = props;
  const { classes } = useStyles();
  return (
    <Box className={classes.dropzoneContentItem} color="primary" {...BoxProps}>
      <div className={classes.motif}>{motif}</div>
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          {Boolean(title) && <div className={classes.title}>{title}</div>}
          {Boolean(contentItems.length > 0) && (
            <div className={classes.contentItems}>
              {contentItems.map((item, key) => (
                <div
                  key={`ContentItem-${key + key}`}
                  className={classes.contentItemGroup}
                >
                  {Boolean(item.icon) && (
                    <ActionIcon
                      className={classes.contentItem}
                      color="cyan"
                      onClick={() => item.onAction?.(item)}
                      radius="sm"
                      size="xl"
                      variant="filled"
                      {...item.iconProps}
                    >
                      {item.icon}
                    </ActionIcon>
                  )}
                  {Boolean(item.label) && <span>{item.label}</span>}
                </div>
              ))}
            </div>
          )}
          {Boolean(content) && <div>{content}</div>}
        </div>
        <div className={classes.dropzoneContainer}>
          <Dropzone
            accept={PDF_MIME_TYPE}
            classNames={{
              inner: classes.dropzoneInner,
              root: classes.dropzoneRoot,
            }}
            maxSize={3 * 1024 ** 2}
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, no-console
            onDrop={(file) => console.log(`accept${file}`)}
          >
            <ActionIcon
              className={classes.contentItem}
              radius="xl"
              size="xl"
              style={{ margin: 'auto' }}
              variant="filled"
            >
              <Plus size={20} weight="bold" />
            </ActionIcon>
            <p>Drag and drop your documents here</p>
            <p className={classes.dropzoneBrowse}>
              <Eye size={16} style={{ marginRight: '8px' }} weight="bold" />
              Browse your device
            </p>
          </Dropzone>
        </div>
      </div>
    </Box>
  );
}
