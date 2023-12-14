import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  checkboxRoot: {
    marginBottom: '10px',
  },
  checkboxsBottom: {
    borderTop: `1px solid ${theme.colors.gray[2]}`,
    padding: '17px 0 24px',
  },
  checkboxsTop: {
    margin: '16px 0',
  },
}));
