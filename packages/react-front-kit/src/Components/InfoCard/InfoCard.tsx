'use client';

import type { ActionIconProps, PaperProps } from '@mantine/core';
import type { CSSProperties, ReactElement } from 'react';

import {
  ActionIcon,
  Collapse,
  Paper,
  createStyles,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { CaretDown, CaretUp } from '@phosphor-icons/react';

import { Motif } from './Motif';

export interface IContentItem {
  icon?: ReactElement;
  iconProps?: Partial<ActionIconProps>;
  label?: string;
  onAction?: (item: IContentItem) => void;
}

export interface IInfoCardProps extends PaperProps {
  children?: ReactElement;
  collapse?: boolean;
  content?: ReactElement;
  contentItems?: IContentItem[];
  leftContainerStyle?: CSSProperties;
  motif?: ReactElement;
  responsiveBreakpoint?: string;
  rightContainerStyle?: CSSProperties;
  title?: ReactElement;
}

/** Additional props will be forwarded to the [Mantine Paper component](https://mantine.dev/core/paper/) */
export function InfoCard(props: IInfoCardProps): ReactElement {
  const theme = useMantineTheme();
  const {
    children,
    collapse = true,
    content,
    contentItems = [],
    leftContainerStyle,
    motif = <Motif />,
    rightContainerStyle,
    responsiveBreakpoint = theme.breakpoints.sm,
    title,
    ...PaperProps
  } = props;

  const useStyles = createStyles(() => ({
    collapseButton: {
      [`@media screen and (max-width: ${responsiveBreakpoint})`]: {
        margin: 'auto',
      },
      margin: '12px',
    },
    collapseButtonCenter: {
      marginBottom: 'auto',
      marginTop: 'auto',
    },
    collapseRight: {
      height: '100%',
      width: '100%',
    },
    container: {
      [`@media screen and (max-width: ${responsiveBreakpoint})`]: {
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
      [`@media screen and (max-width: ${responsiveBreakpoint})`]: {
        minWidth: '0px',
      },
      columnGap: 40,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'left',
      marginBottom: '28px',
      rowGap: 10,
    },
    leftContainer: {
      [`@media screen and (max-width: ${responsiveBreakpoint})`]: {
        minWidth: '0px !important',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minWidth: '390px',
    },
    motif: {
      left: -40,
      position: 'absolute',
      top: -60,
      zIndex: 0,
    },
    rightContainer: {
      [`@media screen and (max-width: ${responsiveBreakpoint})`]: {
        maxWidth: 440,
      },
      display: 'flex',
      height: '100%',
      width: '100%',
    },
    root: {
      overflow: 'hidden',
      padding: '24px 48px',
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

  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <Paper className={classes.root} radius={16} {...PaperProps}>
      <div className={classes.motif}>{motif}</div>
      <div className={classes.container}>
        <div className={classes.leftContainer} style={leftContainerStyle}>
          <div className={classes.topContent}>
            {Boolean(title) && <div className={classes.title}>{title}</div>}
            <Collapse in={opened}>
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
            </Collapse>
          </div>
          {Boolean(content) && <div>{content}</div>}
        </div>
        <Collapse className={classes.collapseRight} in={opened}>
          <div className={classes.rightContainer} style={rightContainerStyle}>
            {children}
          </div>
        </Collapse>
        {Boolean(collapse) && (
          <ActionIcon
            className={`${classes.collapseButton} ${
              !opened && classes.collapseButtonCenter
            }`}
            onClick={toggle}
          >
            {opened ? (
              <CaretUp size={28} weight="bold" />
            ) : (
              <CaretDown size={28} weight="bold" />
            )}
          </ActionIcon>
        )}
      </div>
    </Paper>
  );
}
