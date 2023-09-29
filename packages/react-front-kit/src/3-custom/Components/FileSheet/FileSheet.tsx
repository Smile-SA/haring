'use client';

import { Box, BoxProps, MantineProvider } from '@mantine/core';
import { createStyles } from '@mantine/styles';
import type { ReactElement, ReactNode } from 'react';
import Motif from './Motif';

interface IFileSheetProps extends BoxProps {
  children?: ReactNode;
  title?: ReactElement;
  cards?: {title?: 'string', image?: ReactElement, action?: () => {}}[],
  content?: ReactElement,
  dropZone: boolean,
  dropZoneContent?: ReactElement,
  motif?: ReactElement,
}


const useStyles = createStyles((theme) => ({
  fileSheet: {
    backgroundColor: theme.black,
    padding: '32px 42px', 
    borderRadius: '16px',
    width: '100%',
    minHeight: '219px',
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    'h1, h2, h3, h4 h5, p': {
      fontSize: '26px',
      color: theme.white,
      fontWeight: 700,
      marginBottom: '24px',
    }
  },
  leftContainer: {
    maxWidth: '342px',
  },
  rightContainer: {

  },
  cards: {

  },
  card: {

  },
  content: {

  },
  motif: {
    position: 'absolute',
    top: 0,
    left: 0,
  }
}));


export function FileSheet(props: IFileSheetProps): ReactElement {
  const { children, title, cards,
  content,
  dropZone,
  dropZoneContent, motif, ...BoxProps } = props;
  const { classes } = useStyles();
  return (
    <MantineProvider theme={{colorScheme: 'dark'}}>
    <Box className={classes.fileSheet} {...BoxProps}>
      {!motif == null &&     
        <div className={classes.motif}>
          {motif ? motif : <Motif/>}
        </div>
      }
      <div className={classes.leftContainer}>
        { title && 
          <div className={classes.title}>
            {title}
          </div>
        }
        <div className="cards">
          { cards && cards.map(item => 
            <div>
              {
                item.image ? item.image : ""
              }
              <span>
                {item.title && item.title}
              </span>
            </div>
          )}
        </div>
        {content &&  
          <div className={classes.content}>
            {content}
          </div>
        }
      </div>
      {dropZone &&   
        <div className={classes.rightContainer}>

        </div>
      }
    </Box>
    </MantineProvider>
  );
}
