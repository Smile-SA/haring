'use client';

import type { ReactNode } from 'react';

import { Box, Button, Image, useMantineTheme } from '@mantine/core';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { FileIcon } from '@smile/react-front-kit-shared';
import { useState } from 'react';

import defaultImage from '../../../assets/defaultImage.jpg';

import { useStyles } from './DocumentBox.style';

export interface IDocumentBoxProps {
  author?: ReactNode;
  children?: ReactNode;
  date?: ReactNode;
  iconType?: string;
  image?: string;
  mobileImageButtonLabel?: string;
  onCardClick?: () => void;
  path?: ReactNode;
  title?: ReactNode;
}

export function DocumentBox(props: IDocumentBoxProps): ReactNode {
  const {
    author,
    children,
    date,
    iconType,
    image = defaultImage,
    mobileImageButtonLabel = 'Display preview',
    onCardClick,
    path,
    title,
  } = props;
  const [mobileImageDisplayed, setMobileImageDisplayed] = useState(false);

  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Box
      className={`${classes.root} ${onCardClick ? classes.clickable : ''}`}
      onClick={onCardClick}
    >
      <Image
        classNames={{
          image: classes.image,
          root: `${classes.imageRoot} ${
            mobileImageDisplayed ? classes.imageRootMobileDisplayed : ''
          }`,
        }}
        radius={16}
        src={image}
      />
      <div>
        <div>
          <div className={classes.header}>
            <div className={classes.iconContainer}>
              <FileIcon
                className={classes.icon}
                color={theme.fn.primaryColor()}
                type={iconType}
                weight="light"
              />
            </div>
            <div className={classes.headerContent}>
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
        <Button
          className={classes.mobileImageButton}
          onClick={() => setMobileImageDisplayed(!mobileImageDisplayed)}
          rightIcon={mobileImageDisplayed ? <CaretUp /> : <CaretDown />}
          variant="default"
        >
          {mobileImageButtonLabel}
        </Button>
      </div>
    </Box>
  );
}
