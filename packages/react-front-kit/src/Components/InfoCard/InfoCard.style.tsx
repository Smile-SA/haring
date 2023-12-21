import { createStyles } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  collapseButton: {
    [`@media screen and (max-width: ${theme.breakpoints.sm})`]: {
      margin: 'auto',
    },
    margin: '12px',
  },
  collapseButtonCenter: {
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  collapseRight: {
    height: '100%',
    width: '100%',
  },
  container: {
    [`@media screen and (max-width: ${theme.breakpoints.sm})`]: {
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
    [`@media screen and (max-width: ${theme.breakpoints.sm})`]: {
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
    [`@media screen and (max-width: ${theme.breakpoints.sm})`]: {
      minWidth: '0px !important',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: '390px',
  },
  motif: {
    left: -40,
    position: 'absolute',
    top: -60,
    zIndex: 0,
  },
  rightContainer: {
    [`@media screen and (max-width: ${theme.breakpoints.sm})`]: {
      maxWidth: 440,
    },
    display: 'flex',
    height: '100%',
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
