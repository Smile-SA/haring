import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  dataInput: {
    border: `1px solid ${theme.colors.gray[2]}`,
    color: theme.colors.dark,
  },
  dataInputLabel: {
    color: theme.colors.dark,
    fontWeight: 600,
    marginBottom: '4px',
  },
  documentListContainer: {
    [theme.fn.smallerThan('sm')]: {
      padding: '24px 16px 32px 16px',
    },
    borderRadius: 16,
    padding: '48px 56px',
  },
  main: {
    overflowX: 'hidden',
    width: '100%',
  },
  periodContainer: {
    padding: '6px 0',
  },
  select: {
    [theme.fn.smallerThan('sm')]: {
      input: {
        fontSize: '14px',
        padding: '0 16px',
      },
    },
    ':focus, :focus-within': {
      outline: `${rem(2)} solid ${theme.colors.orange[5]}`,
    },
    borderRadius: '1.5rem',
  },
  selectDropdown: {
    left: '0 !important',
    maxWidth: 'calc(100vw - 48px)',
    width: '100% !important',
  },
  selectRight: {
    width: '1.5rem',
  },
}));
