import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  around: {
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  button: {
    '&::after': {
      background:
        theme.colorScheme === 'light'
          ? theme.colors.gray[3]
          : theme.colors.gray[8],
      content: '""',
      display: 'block',
      height: 36,
      position: 'absolute',
      right: 0,
      top: '50%',
      translate: '0 -50%',
      width: 1,
    },
    background: 'transparent',
    borderRadius: 0,
    position: 'relative',
  },
  buttonOpened: {
    '&::after': {
      display: 'none',
    },
    background: theme.fn.primaryColor(),
    color: theme.white,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 64px',
    position: 'relative',
    width: '100%',
  },
  menu: {
    alignItems: 'center',
    gap: theme.spacing.xl,
    left: '50%',
    margin: 'auto',
    position: 'absolute',
    top: '50%',
    translate: '-50% -50%',
  },
  none: {
    display: 'none',
  },
  sizeDesktop: {
    display: 'initial',
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  sizeMobile: {
    display: 'none',
    [theme.fn.smallerThan('md')]: {
      display: 'initial',
    },
  },
}));
