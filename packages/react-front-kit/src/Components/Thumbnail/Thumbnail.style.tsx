import { createStyles } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  dotsIcon: {
    color: theme.colors.cyan[9],
  },
  fileIcon: {
    minWidth: 22,
  },
  headerContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    marginBottom: '22px',
    marginTop: '10px',
  },
  icon: {
    height: 'fit-content',
    margin: 'auto',
  },
  iconTitle: {
    minWidth: '28px',
  },
  menuButton: {
    '&[aria-expanded=true]': {
      '& svg': {
        filter: 'brightness(0) invert(1)',
      },
      backgroundColor: theme.colors.cyan[9],
      borderRadius: '4px',
      display: 'flex',
      height: '28px',
      width: '28px',
    },
  },
  menuButtonSelected: {
    '& svg': {
      filter: 'brightness(0) invert(1)',
    },
    '&[aria-expanded=true]': {
      '& svg': {
        filter: 'none',
      },
      backgroundColor: theme.colors.cyan[0],
    },
    ':hover': {
      '& svg': {
        filter: 'none',
      },
      backgroundColor: theme.colors.cyan[1],
    },
  },
  root: {
    background: theme.colors.gray[1],
    borderRadius: '16px',
    cursor: 'pointer',
    height: 'auto',
    padding: '16px',
    width: 'auto',
  },
  rootSelected: { background: theme.primaryColor, color: 'white' },
  title: {
    margin: '0 19px 0 0',
    paddingLeft: '10px',
  },
  titleContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
}));
