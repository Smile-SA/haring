'use client';

import type { BoxProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { Box, MantineProvider } from '@mantine/core';
import { createStyles } from '@mantine/styles';

import Motif from './Motif';

interface ICard {
  image?: ReactElement;
  onAction?: (item: ICard) => void;
  title?: string;
}

interface IFileSheetProps extends BoxProps {
  cards?: ICard[];
  cardsColor?: string;
  children?: ReactNode;
  content?: ReactElement;
  dropZone: boolean;
  dropZoneContent?: ReactElement;
  motif?: ReactElement;
  motifVisible?: boolean;
  title?: ReactElement;
}

export function FileSheet(props: IFileSheetProps): ReactElement {
  const {
    children,
    title,
    cards,
    cardsColor,
    content,
    dropZone,
    dropZoneContent,
    motif,
    motifVisible = true,
    ...BoxProps
  } = props;

  const useStyles = createStyles((theme) => ({
    card: {
      alignItems: 'center',
      background: cardsColor ? cardsColor : theme.colors.cyan[0],
      borderRadius: '4px',
      cursor: 'pointer',
      display: 'flex',
      height: '40px',
      justifyContent: 'center',
      marginRight: '16px',
      minWidth: '40px',
      width: '40px',
    },
    cardGroupe: {
      alignItems: 'center',
      color: 'white',
      display: 'flex',
      justifyContent: 'left',
      marginBottom: '20px',
      paddingRight: '20px',
      width: '200px',
    },
    cards: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'left',
    },
    container: {
      position: 'relative',
      zIndex: 1,
    },
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
      maxWidth: '410px',
    },
    motif: {
      left: 0,
      position: 'absolute',
      top: 0,
      zIndex: 0,
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
  const { classes } = useStyles();
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <Box className={classes.fileSheet} {...BoxProps}>
        {motifVisible ? (
          <div className={classes.motif}>{motif ? motif : <Motif />}</div>
        ) : null}
        <div className={classes.container}>
          <div className={classes.leftContainer}>
            {title ? <div className={classes.title}>{title}</div> : null}
            <div className={classes.cards}>
              {cards
                ? cards.map((item, key) => (
                    <div
                      key={`card-${key + key}`}
                      className={classes.cardGroupe}
                    >
                      {item.image ? (
                        <div
                          aria-hidden="true"
                          className={classes.card}
                          onClick={() => item.onAction && item.onAction(item)}
                        >
                          {item.image}
                        </div>
                      ) : null}
                      <span>{item.title ? item.title : null}</span>
                    </div>
                  ))
                : null}
            </div>
            {content ? <div className={classes.content}>{content}</div> : null}
          </div>
          {dropZone ? <div className={classes.rightContainer} /> : null}
        </div>
      </Box>
    </MantineProvider>
  );
}
