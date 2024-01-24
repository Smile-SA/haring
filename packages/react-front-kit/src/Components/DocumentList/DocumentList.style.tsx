import { createStyles, getStylesRef } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  list: {
    [`.${getStylesRef('actionBar')}`]: {
      marginBottom: '1.5rem',
    },
    [`.${getStylesRef('selectableList')}`]: {
      marginTop: 0,
    },
    [theme.fn.smallerThan('sm')]: {
      [`.${getStylesRef('selectableListCheckbox')}`]: {
        position: 'absolute',
        top: 12.5,
      },
      [`.${getStylesRef('documentBoxIcon')}`]: {
        left: 32,
      },
      [`.${getStylesRef('documentBoxHeaderTop')}`]: {
        marginLeft: 72,
      },
    },
  },
}));
