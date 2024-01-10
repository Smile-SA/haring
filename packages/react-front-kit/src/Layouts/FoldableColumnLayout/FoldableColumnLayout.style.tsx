import { createStyles } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  box: {
    padding: '40px 64px 0 64px',
    position: 'relative',
    [theme.fn.smallerThan('md')]: {
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
    },
    width: '100%',
  },
  boxWithMotif: {
    [theme.fn.smallerThan('md')]: {
      padding: '24px',
    },
  },
  collapseButton: {
    [theme.fn.smallerThan('md')]: {
      '> button': {
        '> *': {
          justifyContent: 'space-between',
        },
        width: '100%',
      },
      padding: '0 24px',
    },
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
  collapseButtonWithMotif: {
    [theme.fn.smallerThan('md')]: {
      paddingTop: '24px',
    },
  },
  container: {
    padding: '24px 64px 40px 64px',
    [theme.fn.smallerThan('md')]: {
      padding: '0 24px 24px 24px',
    },
  },
  content: {
    [theme.fn.smallerThan('md')]: {
      flexBasis: '100%',
      maxWidth: '100%',
      paddingTop: 24,
    },
  },
  contentGrid: {
    [theme.fn.smallerThan('md')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  motif: {
    left: -40,
    pointerEvents: 'none',
    position: 'absolute',
    top: -60,
    userSelect: 'none',
    zIndex: 0,
  },
  motifContainer: {
    height: '100%',
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  sidebar: {
    [theme.fn.smallerThan('md')]: {
      flexBasis: '100%',
      maxWidth: '100%',
      paddingBottom: 0,
      paddingTop: 8,
    },
  },
  topBlock: {
    [theme.fn.smallerThan('md')]: {
      margin: 0,
    },
  },
  topBlockContent: {
    [theme.fn.smallerThan('md')]: {
      padding: 0,
    },
  },
  topGrid: {
    [theme.fn.smallerThan('md')]: {
      margin: 0,
    },
  },
  topLeft: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  topRight: {
    [theme.fn.smallerThan('md')]: {
      flexBasis: '100%',
      maxWidth: '100%',
      padding: 0,
    },
  },
}));
