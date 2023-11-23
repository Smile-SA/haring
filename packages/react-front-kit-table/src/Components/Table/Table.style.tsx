import { createStyles, getStylesRef } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  alertBanner: {
    background: theme.colors.cyan[9],
    border: 0,
    borderRadius: 0,
    height: '56px',
  },
  alertToolbar: {
    color: theme.white,
  },
  internalToolbar: {
    alignItems: 'center',
    gap: '10px',
  },
  menuButton: {
    '&[aria-expanded=true]': {
      '& svg': {
        filter: 'contrast(8) invert(1)',
      },
      backgroundColor: theme.colors.cyan[9],
      borderRadius: '4px',
      display: 'flex',
      height: '28px',
      width: '28px',
    },
  },
  menuButtonWrapper: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  paper: {
    border: 0,
    borderRadius: '24px',
    boxShadow:
      '0px 3.43489px 2.74791px 0px rgba(0, 0, 0, 0.02), 0px 8.6871px 6.94968px 0px rgba(0, 0, 0, 0.02), 0px 17.72087px 14.1767px 0px rgba(0, 0, 0, 0.03), 0px 36.50164px 29.20132px 0px rgba(0, 0, 0, 0.03), 0px 100px 80px 0px rgba(0, 0, 0, 0.05)',
  },
  rowActions: {
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '24px',
    marginRight: '16px',
    opacity: 0,
    ref: getStylesRef('rowActions'),
    '& > *': {
      height: '1.75rem',
      minHeight: '1.75rem',
      width: '1.75rem',
      minWidth: '1.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  rowActionsMenuOpened: {
    ref: getStylesRef('rowActionsMenuOpened'),
  },
  table: {
    [`& tr:hover .${getStylesRef('rowActions')}, & tr .${getStylesRef(
      'rowActionsMenuOpened',
    )}`]: {
      opacity: 1,
    },
  },
  toolbarAction: {
    background: theme.white,
  },
}));
