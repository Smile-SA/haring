import { createStyles } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  actionIcons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginLeft: 'auto',
  },
  colLeftBar: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  colRight: {
    background: theme.fn.primaryColor(),
    padding: '40px 64px',
  },
  grid: {
    height: '100%',
  },
  main: {
    overflowX: 'hidden',
    width: '100%',
  },
}));
