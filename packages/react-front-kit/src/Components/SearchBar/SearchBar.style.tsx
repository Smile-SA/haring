import { createStyles, rem } from '@mantine/core';

// TODO: fix mobile style
export const useStyles = createStyles((theme) => ({
  closeIcon: {
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      right: '-14px',
      transform: 'scale(0.6)',
    },
  },
  container: {
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      fontSize: '14px',
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
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      fontSize: '14px',
    },
    ':focus, :focus-within': {
      outline: `${rem(2)} solid ${theme.colors.orange[5]}`,
    },
    borderRadius: '1.5rem',
    fontSize: '18px',
    paddingLeft: 'calc(3.125rem  / 3)',
    paddingRight: 'calc(3.125rem  / 3)',
  },
  inputRoot: {
    flexGrow: 1,
    pointerEvents: 'auto',
  },
  leftSection: {
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      display: 'inline-block',
      fontSize: '14px',
      minWidth: '100px',
      overflow: 'hidden',
    },
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    pointerEvents: 'auto',
  },
  separator: {
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
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
