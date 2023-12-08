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
  periodContainer: {
    padding: '6px 0',
  },
  select: {
    ':focus, :focus-within': {
      outline: `${rem(2)} solid ${theme.colors.orange[5]}`,
    },
    borderRadius: '1.5rem',
  },
}));
