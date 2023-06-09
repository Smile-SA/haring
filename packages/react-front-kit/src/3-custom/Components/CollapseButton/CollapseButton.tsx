import type { ButtonProps, CSSObject, MantineTheme } from '@mantine/core';
import type { ReactNode } from 'react';

import { ActionIcon, Button, Collapse } from '@mantine/core';
import { CaretDown, CaretRight } from '@phosphor-icons/react';
import { useState } from 'react';

interface ICollapseButtonProps extends ButtonProps {
  children?: ReactNode;
  label?: string;
  level?: number;
  line?: boolean;
}

export function CollapseButton(props: ICollapseButtonProps): JSX.Element {
  const { children, label, leftIcon, level = 0, line, ...buttonProps } = props;
  const [opened, setOpened] = useState(false);

  function handleClick(): void {
    setOpened(!opened);
  }

  function getRootStyles(): CSSObject {
    if (level === 1) {
      return {
        height: 36,
      };
    } else if (level > 1) {
      return {
        height: 30,
      };
    }
    return {};
  }

  function getLabelStyles(theme: MantineTheme): CSSObject {
    if (level === 1) {
      return {
        color: theme.colors.dark[3],
        fontSize: theme.fontSizes.md,
      };
    } else if (level > 1) {
      return {
        color: theme.colors.dark[3],
        fontSize: theme.fontSizes.sm,
        fontWeight: 400,
      };
    }
    return {};
  }

  return (
    <div>
      <Button
        color="dark"
        leftIcon={
          Boolean(leftIcon) && (
            <ActionIcon component="div">{leftIcon}</ActionIcon>
          )
        }
        onClick={handleClick}
        rightIcon={
          children ? opened ? <CaretDown /> : <CaretRight /> : undefined
        }
        styles={(theme) => ({
          label: {
            ...getLabelStyles(theme),
            marginRight: 'auto',
          },
          rightIcon: {
            fontSize: theme.fontSizes.md,
          },
          root: getRootStyles(),
        })}
        {...buttonProps}
      >
        {label}
      </Button>
      {Boolean(children) && (
        <Collapse
          in={opened}
          sx={
            line
              ? (theme) => ({
                  borderLeft: `1px solid ${theme.colors.gray[1]}`,
                  marginLeft: 30,
                })
              : undefined
          }
        >
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
