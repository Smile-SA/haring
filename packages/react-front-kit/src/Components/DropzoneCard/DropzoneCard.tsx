'use client';

import type { ActionIconProps, BoxProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { ActionIcon, Box } from '@mantine/core';
import { createStyles } from '@mantine/styles';

import Motif from './Motif';

interface IContentItem {
  icon?: ReactElement;
  iconProps?: Partial<ActionIconProps>;
  label?: string;
  onAction?: (item: IContentItem) => void;
}

interface IDropzoneCardProps extends BoxProps {
  children?: ReactElement;
  contentItems?: IContentItem[];
  dropzone?: ReactElement;
  motif?: ReactElement;
  title?: ReactElement;
}

const useStyles = createStyles((theme) => ({
  container: {
    position: 'relative',
    zIndex: 1,
  },
  contentItem: {
    alignItems: 'center',
    color: theme.colors.cyan[7],
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
    width: '200px',
  },
  contentItems: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
  },
  dropzoneContentItem: {
    borderRadius: '16px',
    minHeight: '219px',
    overflow: 'hidden',
    padding: '32px 42px',
    position: 'relative',
    width: '100%',
  },
  leftContainer: {
    maxWidth: '410px',
  },
  motif: {
    left: 0,
    position: 'absolute',
    top: 0,
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
    children,
    title,
    contentItems = [],
    dropzone,
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
          {Boolean(children) && <div>{children}</div>}
        </div>
        {Boolean(dropzone) && <div />}
      </div>
    </Box>
  );
}
