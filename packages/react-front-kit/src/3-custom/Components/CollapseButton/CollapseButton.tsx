import type { ButtonProps } from '@mantine/core';
import type { ReactNode } from 'react';

import { ActionIcon, Button, Collapse, createStyles } from '@mantine/core';
import { CaretDown, CaretRight } from '@phosphor-icons/react';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  label: {
    color:
      theme.colorScheme === 'light'
        ? theme.colors.dark[3]
        : theme.colors.dark[0],
    marginRight: 'auto',
  },
  labelDeepLevel: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 400,
  },
  labelLevel1: {
    fontSize: theme.fontSizes.md,
  },
  line: {
    borderLeft: `1px solid ${theme.colors.gray[1]}`,
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

interface ICollapseButtonProps extends ButtonProps {
  children?: ReactNode;
  label?: ReactNode;
  level?: number;
  line?: boolean;
}

export function CollapseButton(props: ICollapseButtonProps): JSX.Element {
  const { children, label, leftIcon, level = 0, line, ...buttonProps } = props;
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  function handleClick(): void {
    if (children) {
      setOpened(!opened);
    }
  }

  const rootClasses = [classes.root];
  const labelClasses = [classes.label];
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
        color="dark"
        leftIcon={
          Boolean(leftIcon) && (
            <ActionIcon
              color="primary"
              component="div"
              radius="sm"
              variant="light"
            >
              {leftIcon}
            </ActionIcon>
          )
        }
        onClick={handleClick}
        rightIcon={
          children ? opened ? <CaretDown /> : <CaretRight /> : undefined
        }
        {...buttonProps}
      >
        {label}
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
  variant: 'white',
};
