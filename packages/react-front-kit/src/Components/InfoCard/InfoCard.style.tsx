import { createStyles } from '@mantine/styles';

export const useStyles = createStyles(() => ({
  collapseButton: {
    '@media (max-width: 834px)': {
      display: 'none',
    },
    margin: '12px',
  },
  collapseButtonCenter: {
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  container: {
    '@media (max-width: 834px)': {
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content',
    },
    display: 'flex',
    flexWarp: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 1,
  },
  contentItem: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    fontSize: '20px',
    justifyContent: 'center',
  },
  contentItemGroup: {
    alignItems: 'center',
    display: 'flex',
    gap: 16,
    justifyContent: 'left',
    maxWidth: 175,
  },
  contentItems: {
    '@media (max-width: 834px)': {
      minWidth: '0px',
    },
    columnGap: 40,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
    marginBottom: '28px',
    rowGap: 10,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  motif: {
    left: -40,
    position: 'absolute',
    top: -60,
    zIndex: 0,
  },
  rightContainer: {
    '@media (min-width: 834px)': {
      maxWidth: 440,
    },
    display: 'flex',
    width: '100%',
  },
  root: {
    overflow: 'hidden',
    padding: '24px 48px',
    position: 'relative',
    width: '100%',
  },
  title: {
    'h1, h2, h3, h4 h5, p': {
      fontSize: '26px',
      fontWeight: 700,
    },
  },
  topContent: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 24,
  },
}));
