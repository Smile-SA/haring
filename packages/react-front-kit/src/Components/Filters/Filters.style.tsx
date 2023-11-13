import { createStyles } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  activeFilters: {
    display: 'flex',
    flexWrap: 'nowrap',
    marginTop: '16px',
  },
  badgeInner: {
    fontWeight: 600,
    position: 'relative',
    right: '4px',
  },
  badgeRight: {
    position: 'relative',
    right: '4px',
    top: '1px',
  },
  badgeRoot: {
    border: '2px solid white',
    color: 'white',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 'normal',
    marginBottom: '8px',
    marginRight: '8px',
    textTransform: 'capitalize',
  },
  buttonRemoveRoot: { color: 'white', fontSize: '14px', padding: '0' },
  root: {
    backgroundColor: 'white',
    borderRadius: '16px',
  },
  title: {
    fontWeight: 600,
  },
  top: {
    background: theme.colors.cyan[9],
    border: '8px solid white',
    borderRadius: '16px 16px 0px 0px',
    color: 'white',
    padding: '24px',
  },
}));
