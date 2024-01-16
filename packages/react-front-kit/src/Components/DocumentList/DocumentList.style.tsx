import { createStyles, getStylesRef } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  list: {
    [theme.fn.smallerThan('sm')]: {
      [`.${getStylesRef('selectableListCheckbox')}`]: {
        position: 'absolute',
        top: 12.5,
      },
      [`.${getStylesRef('documentCardIcon')}`]: {
        left: 32,
      },
      [`.${getStylesRef('documentCardHeaderTop')}`]: {
        marginLeft: 72,
      },
    },
  },
}));
