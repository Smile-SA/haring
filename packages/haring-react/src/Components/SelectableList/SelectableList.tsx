import type { StackProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { Checkbox, Group, Stack } from '@mantine/core';

import classes from './SelectableList.module.css';

export interface ISelectableListAriaLabels {
  checkboxInput?: string;
}

export interface ISelectableListProps extends StackProps {
  ariaLabels?: ISelectableListAriaLabels;
  children: ReactElement[];
  onSelectChange?: (index: number, isSelected: boolean) => void;
  selectedIndexes?: number[];
}

export function SelectableList(props: ISelectableListProps): ReactElement {
  const {
    ariaLabels,
    children,
    onSelectChange,
    selectedIndexes = [],
    ...stackProps
  } = props;

  return (
    <Stack className={`${classes.list} selectableListRef`} {...stackProps}>
      {children.map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Group
          key={element.key ?? index}
          className={classes.element}
          gap={32}
          wrap="nowrap"
        >
          <Checkbox
            aria-label={ariaLabels?.checkboxInput || 'checkbox input'}
            checked={selectedIndexes.includes(index)}
            className="selectableListCheckboxRef"
            onChange={(e) => onSelectChange?.(index, e.currentTarget.checked)}
            radius={2}
            size="16"
          />
          {element}
        </Group>
      ))}
    </Stack>
  );
}
