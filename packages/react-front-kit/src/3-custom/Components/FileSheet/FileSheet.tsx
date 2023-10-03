'use client';

import type { BoxProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { Box } from '@mantine/core';
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
  defaultMotifColor?: string;
  defaultMotifOpacity?: string;
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
    cards = [],
    cardsColor,
    content,
    defaultMotifColor,
    defaultMotifOpacity,
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
        fontSize: '26px',
        fontWeight: 700,
        marginBottom: '24px',
      },
    },
  }));
  const { classes } = useStyles();
  return (
    <Box className={classes.fileSheet} color="primary" {...BoxProps}>
      {Boolean(motifVisible) && (
        <div className={classes.motif}>
          {motif ? (
            motif
          ) : (
            <Motif color={defaultMotifColor} opacity={defaultMotifOpacity} />
          )}
        </div>
      )}
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          {Boolean(title) && <div className={classes.title}>{title}</div>}
          {Boolean(cards.length > 0) && (
            <div className={classes.cards}>
              {cards.map((item, key) => (
                <div key={`card-${key + key}`} className={classes.cardGroupe}>
                  {Boolean(item.image) && (
                    <div
                      aria-hidden="true"
                      className={classes.card}
                      onClick={() => item.onAction && item.onAction(item)}
                    >
                      {item.image}
                    </div>
                  )}
                  <span>{Boolean(item.title) && item.title}</span>
                </div>
              ))}
            </div>
          )}
          {Boolean(content) && <div className={classes.content}>{content}</div>}
        </div>
        {Boolean(dropZone) && <div className={classes.rightContainer} />}
      </div>
    </Box>
  );
}
