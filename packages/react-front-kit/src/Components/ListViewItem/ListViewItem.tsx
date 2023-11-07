'use client';

import type { ReactElement, ReactNode } from 'react';

import { Box, Image, useMantineTheme } from '@mantine/core';
import { FileIcon } from '@smile/react-front-kit-shared';

import defaultImage from '../../../assets/defaultImage.jpg';

import { useStyles } from './ListViewItem.style';

export interface IListViewItemProps {
  author: string;
  children?: ReactNode;
  date?: string;
  iconType?: string;
  image?: string;
  path?: string;
  title?: ReactElement;
}

export function ListViewItem(props: IListViewItemProps): ReactElement {
  const {
    author,
    children,
    date,
    iconType,
    image = defaultImage,
    path,
    title,
  } = props;
  const { classes } = useStyles();

  const theme = useMantineTheme();

  return (
    <Box className={classes.root}>
      <Image
        classNames={{ image: classes.image, root: classes.imageRoot }}
        radius={16}
        src={image}
        width={165}
      />
      <div className={classes.rightContainer}>
        <div>
          <div className={classes.header}>
            <div className={classes.iconContainer}>
              <FileIcon
                color={theme.colors.cyan[9]}
                size={38}
                type={iconType}
                weight="light"
              />
            </div>
            <div>
              <div className={classes.headerTop}>
                <div className={classes.title}>{title}</div>
                <span className={classes.path}>({path})</span>
              </div>
              <div className={classes.headerBottom}>
                <span className={classes.date}>{date}</span> -
                <span className={classes.author}>{author}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.children}>{children}</div>
      </div>
    </Box>
  );
}
