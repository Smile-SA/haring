import { createStyles } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  buttonInner: {
    justifyContent: 'Left',
  },
  buttonLabel: {
    color: theme.colors.dark,
    textAlign: 'left',
  },
  buttonRoot: {
    '&[data-selected="false"]': {
      background: 'inherit',
    },
    background: theme.colors.cyan[0],
  },
  contentContainer: {
    padding: '10px',
  },
}));
