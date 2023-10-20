'use client';

import type { ReactElement, ReactNode } from 'react';

import {
  Box,
  Group,
  Image,
  createStyles,
  useMantineTheme,
} from '@mantine/core';

import defaultImage from './defaultImage.jpg';

const useStyles = createStyles((theme) => ({
  root: {
    borderRadius: '16px',
    heigh: 'auto',
    padding: '16px',
    width: 'auto',
  },
  rootSelected: { background: theme.primaryColor },
  title: {
    margin: '0',
    paddingLeft: '10px',
  },
  titleContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '22px',
    marginTop: '10px',
  },
  icon: {
    height: 'fit-content',
    margin: 'auto',
  },
}));

export interface IVignetteProps {
  action?: [{ icon: ReactNode; label: string; onAction: () => void }];
  icon?: ReactElement;
  image?: ReactElement;
  label?: string;
  onClick?: () => void;
  selected: boolean;
}

export function Vignette(props: IVignetteProps): ReactElement {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const {
    action,
    icon,
    image = <Image radius="14px" src={defaultImage} />,
    label,
    onClick = (selected: boolean) => {
      selected = !selected;
    },
    selected = false,
  } = props;
  function getGoodTextColor(): string {
    console.log(theme.primaryShade);
    if (theme.primaryShade > 5) {
      return 'white';
    }
    return 'black';
  }

  return (
    <Box
      bg={String(Boolean(selected) && theme.primaryColor)}
      className={classes.root}
      onClick={() => onClick(selected)}
      radius="22px"
    >
      <Group>
        <div className={classes.titleContainer}>
          {icon}
          <h3
            className={classes.title}
            style={{ color: selected && getGoodTextColor() }}
          >
            {label}
          </h3>
        </div>
      </Group>
      {image}
    </Box>
  );
}
