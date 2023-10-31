'use client';

import type { ReactElement, ReactNode } from 'react';

import {
  ActionIcon,
  Box,
  Group,
  Image,
  Menu,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { DotsThreeVertical } from '@phosphor-icons/react';

import { useStyles } from './Thumbnail.style';
import defaultImage from './defaultImage.jpg';
import { getIconByIconType } from './fileExtendType';

export interface IThumbnailProps {
  action?: {
    color?: string;
    icon: ReactNode;
    label: string;
    onAction: () => void;
  }[];
  iconType?: string;
  image?: ReactElement;
  label?: string;
  onClick?: () => void;
  selected?: boolean;
}

export function Thumbnail(props: IThumbnailProps): ReactElement {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const {
    action = [],
    iconType = 'UNKNOWN',
    image = defaultImage,
    label,
    onClick,
    selected = false,
  } = props;
  function getGoodTextColor(): string {
    if (typeof theme.primaryShade === `number` && theme.primaryShade > 5) {
      return 'white';
    }
    return 'black';
  }

  return (
    <Box
      bg={String(selected ? theme.primaryColor : theme.colors.gray[1])}
      className={classes.root}
      onClick={onClick}
    >
      <Group
        className={classes.headerContainer}
        style={{
          color: selected ? getGoodTextColor() : undefined,
        }}
      >
        <div className={classes.titleContainer}>
          {getIconByIconType(
            iconType,
            String(selected ? theme.colors.gray[1] : theme.colors.cyan[9]),
          )}
          <Text
            className={classes.title}
            component="h3"
            style={{
              color: selected ? getGoodTextColor() : undefined,
            }}
            truncate
          >
            {label}
          </Text>
        </div>
        <div>
          {action.length > 0 && (
            <Menu radius={4} shadow="lg" width={200}>
              <Menu.Target>
                <ActionIcon
                  className={
                    selected ? classes.menuButtonSelected : classes.menuButton
                  }
                  radius={4}
                  type="button"
                >
                  <div>
                    <DotsThreeVertical
                      color={theme.colors.cyan[9]}
                      size={16}
                      weight="bold"
                    />
                  </div>
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                {action.map((action, index) => (
                  <Menu.Item
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    color={action.color}
                    icon={action.icon}
                  >
                    {action.label}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          )}
        </div>
      </Group>
      <Image radius="16px" src={image} />
    </Box>
  );
}
