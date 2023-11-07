import { createStyles } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  author: {
    fontWeight: 600,
    marginLeft: '12px',
  },
  children: {
    marginTop: '16px',
  },
  date: {
    marginRight: '12px',
  },
  header: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  headerBottom: {
    color: theme.colors.dark[3],
    fontSize: '14px',
    marginRight: '12px',
  },
  headerTop: {
    '@media (max-width: 882px)': {
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
    maxWidth: '165px',
  },
  imageRoot: {
    '@media (max-width: 1112px)': {
      flexDirection: 'column',
      marginBottom: '20px',
    },
    marginRight: '32px',
  },
  path: {
    color: theme.colors.dark[6],
  },
  rightContainer: {},
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // eslint-disable-next-line sort-keys
    '@media (max-width: 1112px)': {
      // flexDirection: 'column',
    },
  },
  title: {
    'h1,h2,h3,h4,p': {
      display: 'flex',
      fontSize: '18px',
      margin: '0 16px 0 0',
    },
  },
}));
