import { createStyles } from '@mantine/styles';

export const useStyles = createStyles(() => ({
  collapseButton: {
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
    display: 'flex',
    flexWarp: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 1,
  },
  containerMobile: {
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
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
    columnGap: 40,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
    marginBottom: '28px',
    rowGap: 10,
  },
  contentItemsMobile: {
    minWidth: '0px',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: '390px',
  },
  leftContainerMobile: {
    minWidth: '0px !important',
  },
  motif: {
    left: -40,
    position: 'absolute',
    top: -60,
    zIndex: 0,
  },
  rightContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  rightContainerMobile: {
    maxWidth: 440,
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
