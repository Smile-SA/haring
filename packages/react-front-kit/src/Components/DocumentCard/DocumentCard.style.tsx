import { createStyles, getStylesRef } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  author: {
    fontWeight: 600,
  },
  children: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: '10px',
    },
    marginTop: '16px',
  },
  clickable: {
    cursor: 'pointer',
  },
  header: {
    display: 'flex',
  },
  headerBottom: {
    [theme.fn.smallerThan('sm')]: {
      fontSize: '12px',
      margin: 0,
    },
    [theme.fn.largerThan('sm')]: {
      alignItems: 'center',
    },
    color: theme.colors.dark[3],
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '14px',
    fontWeight: 400,
    marginRight: '12px',
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'column',
    [theme.fn.smallerThan('sm')]: {
      gap: '16px',
    },
    [theme.fn.largerThan('sm')]: {
      gap: '4px',
    },
  },
  headerTop: {
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      marginLeft: '40px',
    },
    [theme.fn.largerThan('sm')]: {
      alignItems: 'center',
    },
    display: 'flex',
    flexWrap: 'wrap',
    ref: getStylesRef('documentCardHeaderTop'),
  },
  icon: {
    [theme.fn.smallerThan('sm')]: {
      height: '24px',
      width: '24px',
    },
    [theme.fn.largerThan('sm')]: {
      height: '38px',
      width: '38px',
    },
  },
  iconContainer: {
    [theme.fn.smallerThan('sm')]: {
      height: '24px',
      margin: '8.5px 16px 8.5px 0',
      position: 'absolute',
    },
    marginRight: '16px',
    ref: getStylesRef('documentCardIcon'),
  },
  image: {
    border: `1px solid ${theme.colors.gray[2]}`,
    borderRadius: '16px',
    [theme.fn.largerThan('sm')]: {
      marginRight: '32px',
      minHeight: '164px',
    },
  },
  imageRoot: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
      marginTop: '16px',
      order: 2,
    },
    [theme.fn.largerThan('sm')]: {
      marginRight: '32px',
      maxWidth: '165px',
    },
  },
  imageRootMobileDisplayed: {
    [theme.fn.smallerThan('sm')]: {
      display: 'initial',
    },
  },
  mobileImageButton: {
    background: 'transparent',
    border: 0,
    marginTop: '10px',
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  path: {
    [theme.fn.smallerThan('sm')]: {
      fontSize: '12px',
    },
    color: theme.colors.dark[6],
    fontWeight: 400,
  },
  root: {
    display: 'flex',
    ref: getStylesRef('documentCard'),
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },
  separator: {
    [theme.fn.smallerThan('sm')]: {
      // display: 'none',
      margin: '0 7px',
    },
    margin: '0 12px',
  },
  title: {
    [theme.fn.smallerThan('sm')]: {
      fontSize: '14px',
      margin: 0,
    },
    display: 'flex',
    fontSize: '18px',
    fontWeight: 700,
    margin: '0 16px 0 0',
  },
}));
