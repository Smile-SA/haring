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
    '@media (max-width: 833px)': {
      flexDirection: 'column',
    },
    color: theme.colors.dark[3],
    display: 'flex',
    fontSize: '14px',
    marginRight: '12px',
  },
  headerTop: {
    '@media (max-width: 833px)': {
      flexDirection: 'column',
    },
    display: 'flex',
    flexWrap: 'wrap',
  },
  iconContainer: {
    marginRight: '16px',
  },
  image: {
    border: `1px solid ${theme.colors.gray[2]}`,
    borderRadius: '16px',
    marginRight: '32px',
  },
  imageRoot: {
    '@media (max-width: 414px)': {
      maxWidth: '100%',
    },
    '@media (max-width: 833px)': {
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
    cursor: 'pointer',
    display: 'flex',
    // eslint-disable-next-line sort-keys
    '@media (max-width: 833px)': {
      flexDirection: 'column',
    },
  },
  separator: {
    '@media (max-width: 833px)': {
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
