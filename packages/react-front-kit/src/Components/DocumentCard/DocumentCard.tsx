'use client';

import type { ReactNode } from 'react';

import { Box, Image, useMantineTheme } from '@mantine/core';
import { FileIcon } from '@smile/react-front-kit-shared';

import defaultImage from '../../../assets/defaultImage.jpg';

import { useStyles } from './DocumentCard.style';

export interface IDocumentCardProps {
  author: ReactNode;
  children?: ReactNode;
  date?: ReactNode;
  iconType?: string;
  image?: string;
  path?: ReactNode;
  title?: ReactNode;
}

export function DocumentCard(props: IDocumentCardProps): ReactNode {
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
      />
      <div>
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
                {Boolean(title) && (
                  <span className={classes.title}>{title}</span>
                )}
                {Boolean(path) && <span className={classes.path}>{path}</span>}
              </div>
              <div className={classes.headerBottom}>
                {Boolean(date) && (
                  <>
                    <span>{date}</span>
                    {Boolean(author) && (
                      <span className={classes.separator}>-</span>
                    )}
                  </>
                )}
                {Boolean(author) && (
                  <span className={classes.author}>{author}</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.children}>{children}</div>
      </div>
    </Box>
  );
}
