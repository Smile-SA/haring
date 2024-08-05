'use client';

import type { ReactNode } from 'react';

import {
  Box,
  Button,
  Image,
  getThemeColor,
  useMantineTheme,
} from '@mantine/core';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { FileIcon } from '@smile/haring-react-shared';
import { useState } from 'react';

import defaultImage from '../../../assets/defaultImage.jpg';

import classes from './DocumentBox.module.css';

export interface IDocumentBoxProps {
  altText?: string;
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
    altText = 'thumbnail',
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

  const theme = useMantineTheme();

  return (
    <Box
      className={`${classes.root} ${
        onCardClick ? classes.clickable : ''
      } documentBoxRef`}
      onClick={onCardClick}
    >
      <div
        className={`${classes.imageContainer} ${
          mobileImageDisplayed ? classes.imageRootMobileDisplayed : ''
        }`}
      >
        <Image
          alt={altText}
          classNames={{
            root: classes.imageRoot,
          }}
          radius={16}
          src={image}
        />
      </div>
      <div>
        <div>
          <div className={classes.header}>
            <div className={`${classes.iconContainer} documentBoxIconRef`}>
              <FileIcon
                className={classes.icon}
                color={getThemeColor(theme.primaryColor, theme)}
                type={iconType}
                weight="light"
              />
            </div>
            <div className={classes.headerContent}>
              <div className={`${classes.headerTop} documentBoxHeaderTopRef`}>
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
          rightSection={mobileImageDisplayed ? <CaretUp /> : <CaretDown />}
          variant="default"
        >
          {mobileImageButtonLabel}
        </Button>
      </div>
    </Box>
  );
}
