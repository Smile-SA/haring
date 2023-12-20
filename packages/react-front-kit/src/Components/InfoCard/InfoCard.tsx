'use client';

import type { ActionIconProps, PaperProps } from '@mantine/core';
import type { CSSProperties, ReactElement } from 'react';

import { ActionIcon, Collapse, Paper, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { useEffect, useRef } from 'react';

import { useStyles } from './InfoCard.style';
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
    title,
    ...PaperProps
  } = props;
  const { classes } = useStyles();
  const ref = useRef<HTMLInputElement | null>(null);

  const [opened, { toggle, open }] = useDisclosure(true);

  const displayCollapseContentForMobile = setInterval(function () {
    if (
      ref.current &&
      ref.current.offsetWidth &&
      ref.current.offsetWidth < 834
    ) {
      open();
      clearInterval(displayCollapseContentForMobile);
    }
  }, 500);

  useEffect(() => {
    if (!opened) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      displayCollapseContentForMobile;
    } else {
      clearInterval(displayCollapseContentForMobile);
    }
  }, [displayCollapseContentForMobile, opened]);

  return (
    <Paper ref={ref} className={classes.root} radius={16} {...PaperProps}>
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
        <Collapse in={opened}>
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
