import { createStyles } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  activeFilters: {
    flexWrap: 'wrap',
    marginTop: '16px',
  },
  activeFiltersButtonRoot: {
    minWidth: '100%',
    paddingRight: '0',
  },
  activeFiltersCollapseInner: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  activeFiltersCollapseLabel: {
    color: theme.colors.gray[0],
    textAlign: 'left',
  },
  activeFiltersCollapseRoot: {
    background: 'inherit',
    padding: '0px',
  },
  badgeInner: {
    '&::first-letter': {
      textTransform: 'uppercase',
    },
    fontWeight: 600,
    position: 'relative',
    right: '4px',
    textTransform: 'initial',
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
    minWidth: '60px',
  },
  bottom: {
    padding: '24px 24px 48px 24px',
  },
  buttonRemoveRoot: { color: 'white', fontSize: '14px', padding: '0' },
  controlledMenu: {
    borderBottom: `${theme.colors.gray[3]} 1px solid`,
    color: theme.colors.dark[3],
    fontWeight: 600,
    paddingBottom: '10px',
  },
  controlledMenuButton: {
    cursor: 'pointer',
  },
  controlledMenuLine: {
    background: theme.colors.gray[2],
    height: '25px',
    width: '1px',
  },
  middle: {
    margin: '0px 24px',
  },
  removeAllFiltersButtonRoot: {
    marginTop: '8px',
    width: '100%',
  },
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
    marginBottom: '24px',
    padding: '24px 44px',
  },
}));
