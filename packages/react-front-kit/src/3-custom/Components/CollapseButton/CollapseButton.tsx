import type { ButtonProps } from '@mantine/core';
import type { MouseEvent, ReactNode } from 'react';

import { ActionIcon, Button, Collapse, createStyles } from '@mantine/core';
import { CaretDown, CaretRight } from '@phosphor-icons/react';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  button: {
    background: 'transparent',
    border: 0,
    color: 'inherit',
    cursor: 'inherit',
    flex: 1,
    font: 'inherit',
    height: '100%',
    padding: 0,
    textAlign: 'left',
  },
  iconSelected: {
    background:
      theme.colorScheme === 'light' ? theme.white : theme.colors.dark[7],
  },
  label: {
    color:
      theme.colorScheme === 'light'
        ? theme.colors.dark[3]
        : theme.colors.dark[0],
    flex: 1,
  },
  labelDeepLevel: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 400,
  },
  labelLevel1: {
    fontSize: theme.fontSizes.md,
  },
  line: {
    borderLeft:
      theme.colorScheme === 'light'
        ? `1px solid ${theme.colors.gray[1]}`
        : `1px solid ${theme.colors.gray[8]}`,
    marginLeft: 30,
  },
  rightIcon: {
    color:
      theme.colorScheme === 'light'
        ? theme.colors.dark[3]
        : theme.colors.dark[0],
    fontSize: theme.fontSizes.md,
  },
  root: {
    background: 'transparent',
  },
  rootDeepLevel: {
    height: 30,
  },
  rootLevel1: {
    height: 36,
  },
}));

interface ICollapseButtonProps<T> extends ButtonProps {
  children?: ReactNode;
  id?: T;
  label?: ReactNode;
  level?: number;
  line?: boolean;
  onSelect?: (id?: T) => void;
  selected?: boolean;
}

export function CollapseButton<T>(props: ICollapseButtonProps<T>): JSX.Element {
  const {
    children,
    id,
    label,
    leftIcon,
    level = 0,
    line,
    onSelect,
    selected,
    ...buttonProps
  } = props;
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    event.stopPropagation();
    if (children) {
      setOpened(!opened);
    }
  }

  function handleSelect(): void {
    onSelect?.(id);
  }

  const rootClasses = [];
  const labelClasses = [classes.label];
  if (!selected) {
    rootClasses.push(classes.root);
  }
  if (level === 1) {
    rootClasses.push(classes.rootLevel1);
    labelClasses.push(classes.labelLevel1);
  } else if (level > 1) {
    rootClasses.push(classes.rootDeepLevel);
    labelClasses.push(classes.labelDeepLevel);
  }

  return (
    <div>
      <Button
        classNames={{
          label: labelClasses.join(' '),
          rightIcon: classes.rightIcon,
          root: rootClasses.join(' '),
        }}
        component="div"
        leftIcon={
          Boolean(leftIcon) && (
            <ActionIcon
              className={selected ? classes.iconSelected : ''}
              color="primary"
              component="div"
              radius="sm"
              variant="light"
            >
              {leftIcon}
            </ActionIcon>
          )
        }
        onClick={handleSelect}
        rightIcon={
          Boolean(children) && (
            <ActionIcon onClick={handleClick} radius="sm" variant="transparent">
              {opened ? <CaretDown /> : <CaretRight />}
            </ActionIcon>
          )
        }
        variant={selected ? 'light' : 'white'}
        {...buttonProps}
      >
        <button className={classes.button} type="button">
          {label}
        </button>
      </Button>
      {Boolean(children) && (
        <Collapse className={line ? classes.line : ''} in={opened}>
          {children}
        </Collapse>
      )}
    </div>
  );
}

CollapseButton.defaultProps = {
  fullWidth: true,
  radius: 0,
  size: 'md',
};
