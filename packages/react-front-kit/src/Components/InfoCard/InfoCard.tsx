'use client';

import type { ActionIconProps, PaperProps } from '@mantine/core';
import type { CSSProperties, ReactElement } from 'react';

import { ActionIcon, Collapse, Paper, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { CaretDown, CaretUp } from '@phosphor-icons/react';

import { useStyles } from './InfoCard.style';
import { Motif } from './Motif';

export type IMantineBreakpoint = 'lg' | 'md' | 'sm' | 'xs';

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
  responsiveBreakpoint?: IMantineBreakpoint;
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
    responsiveBreakpoint = 'sm',
    title,
    ...PaperProps
  } = props;

  const { classes } = useStyles(responsiveBreakpoint);
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
