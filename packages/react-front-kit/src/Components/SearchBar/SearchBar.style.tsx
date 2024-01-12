import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  closeIcon: {
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      right: '-14px',
      transform: 'scale(0.6)',
    },
  },
  container: {
    [theme.fn.smallerThan('sm')]: {
      fontSize: '14px',
      height: '2.8rem',
      minHeight: '2.8rem',
    },
    ':focus, :focus-within': {
      outline: 'none',
    },
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 0,
    paddingRight: 0,
    pointerEvents: 'none',
  },
  input: {
    ':focus, :focus-within': {
      outline: `${rem(2)} solid ${theme.colors.orange[5]}`,
    },
    borderRadius: '1.5rem',
    height: '100%',
    justifyContent: 'stretch',
    paddingLeft: 'calc(3.125rem  / 3)',
    paddingRight: 'calc(3.125rem  / 3)',
  },
  inputInner: {
    [theme.fn.smallerThan('sm')]: {
      fontSize: '14px',
    },
    fontSize: '18px',
    height: '100%',
  },
  inputInnerRoot: {
    height: '100%',
  },
  inputRoot: {
    flexGrow: 1,
    flexShrink: 1,
    height: '100%',
    pointerEvents: 'auto',
  },
  leftSection: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    pointerEvents: 'auto',
    [theme.fn.smallerThan('sm')]: {
      flexWrap: 'nowrap',
      fontSize: '14px',
      maxWidth: '50%',
      minWidth: '35%',
      textWrap: 'nowrap',
    },
  },
  separator: {
    [theme.fn.smallerThan('sm')]: {
      height: '65%',
      margin: '10px',
    },
    border: `1px solid ${
      theme.colorScheme === 'light'
        ? theme.colors.gray[7]
        : theme.colors.dark[8]
    }`,
    height: '75%',
    margin: 'auto 1.5rem',
  },
}));
