import type { StackProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { Checkbox, Group, Stack } from '@mantine/core';
import { createStyles } from '@mantine/styles';

const useStyles = createStyles(() => ({
  element: {
    ':not(:last-child):after': {
      border: '1px #e9ecef solid',
      bottom: '-41px',
      content: '""',
      position: 'absolute',
      width: '100%',
    },
    position: 'relative',
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
    <Stack spacing={80} {...stackProps}>
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
