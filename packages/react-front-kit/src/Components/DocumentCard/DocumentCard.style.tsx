import { createStyles } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  author: {
    fontWeight: 600,
  },
  children: {
    marginTop: '16px',
  },
  header: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  headerBottom: {
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
    color: theme.colors.dark[3],
    display: 'flex',
    fontSize: '14px',
    marginRight: '12px',
  },
  headerTop: {
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
    display: 'flex',
    flexWrap: 'wrap',
  },
  icon: {
    color: theme.fn.primaryColor(),
  },
  iconContainer: {
    marginRight: '16px',
  },
  image: {
    border: `1px solid ${theme.colors.gray[2]}`,
    borderRadius: '16px',
    marginRight: '32px',
    minHeight: '164px',
  },
  imageRoot: {
    // TODO: redo a lot of this, bad css (static max-width, etc), make mobile mode of Card
    '@media (max-width: 414px)': {
      maxWidth: '100%',
    },
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      marginBottom: '20px',
    },
    marginRight: '32px',
    maxWidth: '165px',
  },
  path: {
    color: theme.colors.dark[6],
  },
  root: {
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
    cursor: 'pointer',
    display: 'flex',
  },
  separator: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
    margin: '0 12px',
  },
  title: {
    display: 'flex',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0 16px 0 0',
  },
}));
