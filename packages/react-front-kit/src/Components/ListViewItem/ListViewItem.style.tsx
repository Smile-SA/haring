import { createStyles } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  children: {
    marginTop: '16px',
  },
  header: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  headerTop: {
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
  rightContainer: {},
  root: {
    display: 'flex',
    // eslint-disable-next-line sort-keys
    '@media (max-width: 1112px)': {
      flexDirection: 'column',
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
