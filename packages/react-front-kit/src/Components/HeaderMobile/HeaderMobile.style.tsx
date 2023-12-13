import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, height: number) => ({
  around: {
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  burgerMenu: {
    backgroundColor: theme.white,
    borderTop: '1px solid',
    borderTopColor: theme.colors.gray[2],
    height: `calc(100vh - ${height}px)`,
    padding: '40px 24px',
  },
  burgerSearch: {
    '.mantine-TextInput-input': {
      padding: '6px 68px 6px 24px',
    },
    marginTop: 'auto',
  },
  containerMobile: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 24px',
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
  searchIcon: {
    marginRight: '24px',
  },
  separator: {
    borderColor: theme.colors.gray[3],
  },
}));
