'use client';

import type { ActionIconProps, PaperProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { ActionIcon, Paper } from '@mantine/core';
import { createStyles } from '@mantine/styles';

import Motif from './Motif';

interface IContentItem {
  icon?: ReactElement;
  iconProps?: Partial<ActionIconProps>;
  label?: string;
  onAction?: (item: IContentItem) => void;
}

interface IInfoCardProps extends PaperProps {
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
    fontSize: '20px',
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
  rightContainer: {
    '@media (max-width: 834px)': {
      marginTop: '24px',
      maxWidth: '100%',
    },
    marginTop: '18px',
    width: '100%',
  },
  root: {
    '@media (max-width: 640px)': {
      padding: '20px 20px',
    },
    borderRadius: '16px',
    minHeight: '219px',
    overflow: 'hidden',
    padding: '20px 20px',
    position: 'relative',
    width: '100%',
  },
  title: {
    'h1, h2, h3, h4 h5, p': {
      fontSize: '26px',
      fontWeight: 700,
      marginBottom: '24px',
    },
  },
}));

/** Additional props will be forwarded to the [Mantine Paper component](https://mantine.dev/core/paper/) */
export function InfoCard(props: IInfoCardProps): ReactElement {
  const {
    content,
    title,
    contentItems = [],
    motif = <Motif />,
    children,
    ...PaperProps
  } = props;
  const { classes } = useStyles();
  return (
    <Paper className={classes.root} {...PaperProps}>
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
        <div className={classes.rightContainer}>{children}</div>
      </div>
    </Paper>
  );
}
