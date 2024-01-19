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
    border: `2px solid ${theme.white}`,
    color: theme.white,
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
    backgroundColor: theme.white,
    borderRadius: '16px',
  },
  sidebarMenuButtonInner: {
    justifyContent: 'Left',
  },
  sidebarMenuButtonLabel: {
    color: theme.colors.dark,
    textAlign: 'left',
  },
  sidebarMenuButtonRoot: {
    '&[data-selected="false"]': {
      background: 'inherit',
    },
    background: theme.colors[theme.primaryColor][0],
  },
  sidebarMenuContentContainer: {
    padding: '10px',
  },
  title: {
    fontWeight: 600,
  },
  top: {
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      padding: '24px 16px',
    },
    background: theme.fn.primaryColor(),
    border: `8px solid ${theme.white}`,
    borderRadius: '16px 16px 0px 0px',
    color: theme.white,
    marginBottom: '24px',
    padding: '24px 44px',
  },
}));
