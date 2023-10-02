'use client';

import type { BoxProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { Box, MantineProvider } from '@mantine/core';
import { createStyles } from '@mantine/styles';

import Motif from './Motif';

interface IFileSheetProps extends BoxProps {
  cards?: { action?: () => void; image?: ReactElement; title?: 'string' }[];
  children?: ReactNode;
  content?: ReactElement;
  dropZone: boolean;
  dropZoneContent?: ReactElement;
  motif?: ReactElement;
  motifVisible?: boolean;
  title?: ReactElement;
}

const useStyles = createStyles((theme) => ({
  card: {},
  cards: {},
  content: {},
  fileSheet: {
    backgroundColor: theme.black,
    borderRadius: '16px',
    minHeight: '219px',
    overflow: 'hidden',
    padding: '32px 42px',
    position: 'relative',
    width: '100%',
  },
  leftContainer: {
    maxWidth: '342px',
  },
  motif: {
    left: 0,
    position: 'absolute',
    top: 0,
  },
  rightContainer: {},
  title: {
    'h1, h2, h3, h4 h5, p': {
      color: theme.white,
      fontSize: '26px',
      fontWeight: 700,
      marginBottom: '24px',
    },
  },
}));

export function FileSheet(props: IFileSheetProps): ReactElement {
  const {
    children,
    title,
    cards,
    content,
    dropZone,
    dropZoneContent,
    motif,
    motifVisible = true,
    ...BoxProps
  } = props;
  const { classes } = useStyles();
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <Box className={classes.fileSheet} {...BoxProps}>
        {motifVisible ? (
          <div className={classes.motif}>{motif ? motif : <Motif />}</div>
        ) : null}
        <div className={classes.leftContainer}>
          {title ? <div className={classes.title}>{title}</div> : null}
          <div className="cards">
            {cards
              ? cards.map((item, key) => (
                  <div key={`card-${key + key}`}>
                    {item.image ? item.image : ''}
                    <span>{item.title ? item.title : null}</span>
                  </div>
                ))
              : null}
          </div>
          {content ? <div className={classes.content}>{content}</div> : null}
        </div>
        {dropZone ? <div className={classes.rightContainer} /> : null}
      </Box>
    </MantineProvider>
  );
}
