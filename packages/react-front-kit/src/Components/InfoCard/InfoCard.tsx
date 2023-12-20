'use client';

import type { ActionIconProps, PaperProps } from '@mantine/core';
import type { CSSProperties, ReactElement } from 'react';

import { ActionIcon, Paper, useMantineTheme } from '@mantine/core';
import { createStyles } from '@mantine/styles';

import { Motif } from './Motif';

const useStyles = createStyles(() => ({
  container: {
    '@media (max-width: 834px)': {
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content',
    },
    display: 'flex',
    flexWarp: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 1,
  },
  content: {
    // marginTop: 10,
  },
  contentItem: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    fontSize: '20px',
    justifyContent: 'center',
  },
  contentItemGroup: {
    alignItems: 'center',
    display: 'flex',
    gap: 16,
    justifyContent: 'left',
    maxWidth: 175,
  },
  contentItems: {
    '@media (max-width: 834px)': {
      minWidth: '0px',
    },
    columnGap: 40,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
    rowGap: 10,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
    justifyContent: 'space-between',
  },
  motif: {
    left: -40,
    position: 'absolute',
    top: -60,
    zIndex: 0,
  },
  rightContainer: {
    '@media (min-width: 834px)': {
      maxWidth: 440,
    },
    display: 'flex',
    width: '100%',
  },
  root: {
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },
  title: {
    'h1, h2, h3, h4 h5, p': {
      fontSize: '26px',
      fontWeight: 700,
    },
  },
  topContent: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 24,
  },
}));

export interface IContentItem {
  icon?: ReactElement;
  iconProps?: Partial<ActionIconProps>;
  label?: string;
  onAction?: (item: IContentItem) => void;
}

export interface IInfoCardProps extends PaperProps {
  children?: ReactElement;
  content?: ReactElement;
  contentItems?: IContentItem[];
  leftContainerStyle?: CSSProperties;
  motif?: ReactElement;
  rightContainerStyle?: CSSProperties;
  title?: ReactElement;
}

/** Additional props will be forwarded to the [Mantine Paper component](https://mantine.dev/core/paper/) */
export function InfoCard(props: IInfoCardProps): ReactElement {
  const theme = useMantineTheme();
  const {
    children,
    content,
    contentItems = [],
    leftContainerStyle,
    motif = <Motif />,
    rightContainerStyle,
    title,
    ...PaperProps
  } = props;
  const { classes } = useStyles();

  return (
    <Paper
      className={classes.root}
      mih={219}
      p={20}
      radius={16}
      {...PaperProps}
    >
      <div className={classes.motif}>{motif}</div>
      <div className={classes.container}>
        <div className={classes.leftContainer} style={leftContainerStyle}>
          <div className={classes.topContent}>
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
                        color={theme.primaryColor}
                        onClick={() => item.onAction?.(item)}
                        radius="sm"
                        size={40}
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
          </div>
          {Boolean(content) && <div className={classes.content}>{content}</div>}
        </div>
        <div className={classes.rightContainer} style={rightContainerStyle}>
          {children}
        </div>
      </div>
    </Paper>
  );
}
