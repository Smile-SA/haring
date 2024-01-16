import type { StackProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { Checkbox, Group, Stack } from '@mantine/core';
import { createStyles, getStylesRef } from '@mantine/styles';

const useStyles = createStyles((theme) => ({
  checkbox: {
    ref: getStylesRef('selectableListCheckbox'),
  },
  element: {
    ':not(:last-child):after': {
      [theme.fn.smallerThan('sm')]: {
        bottom: '-25px',
      },
      border: '1px #e9ecef solid',
      bottom: '-41px',
      content: '""',
      position: 'absolute',
      width: '100%',
    },
    position: 'relative',
  },
  list: {
    [theme.fn.smallerThan('sm')]: {
      gap: 48,
    },
    gap: 80,
    ref: getStylesRef('selectableList'),
  },
}));

export interface ISelectableListProps extends StackProps {
  children: ReactElement[];
  onSelectChange?: (index: number, isSelected: boolean) => void;
  selectedIndexes?: number[];
}

export function SelectableList(props: ISelectableListProps): ReactElement {
  const {
    children,
    onSelectChange,
    selectedIndexes = [],
    ...stackProps
  } = props;

  const { classes } = useStyles();

  return (
    <Stack className={classes.list} {...stackProps}>
      {children.map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Group
          key={element.key ?? index}
          className={classes.element}
          noWrap
          spacing={32}
        >
          <Checkbox
            checked={selectedIndexes.includes(index)}
            className={classes.checkbox}
            onChange={(e) => onSelectChange?.(index, e.currentTarget.checked)}
            radius={2}
            size={16}
          />
          {element}
        </Group>
      ))}
    </Stack>
  );
}
