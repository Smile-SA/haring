import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  activeLabel: {
    '& span': {
      color: theme.colors.dark[6],
    },
  },
  activeRootLabel: {
    '& span': {
      color: theme.fn.primaryColor(),
    },
  },
  dropdown: {
    borderRadius: 10,
    padding: '16px 20px',
  },
  menu: {
    ':hover': { backgroundColor: theme.colors.gray[1] },
    backgroundColor: 'transparent',
  },
  navLink: {
    borderRadius: 10,
    width: 'unset',
  },
  navLinkLabel: {
    fontSize: '14px',
    fontWeight: 400,
    margin: 0,
    padding: 0,
  },
  navLinkParentLabel: {
    fontSize: '14px',
    fontWeight: 600,
    margin: 0,
    padding: 0,
  },
  rootMenu: {
    '& span': {
      color: theme.colors.dark[6],
    },
    ':not(:first-of-type)': {
      marginTop: '32px',
    },
    fontSize: '18px',
  },
}));
