'use client';
import type { ReactElement } from 'react';

import { ActionIcon, Flex, Group, Modal, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  CalendarBlank,
  FileText,
  Newspaper,
  Question,
  Star,
} from '@phosphor-icons/react';
import { useState } from 'react';

import classes from './FloatingMenu.module.css';

type IMenuPosition = 'Left' | 'Right';

export interface IMenuItems {
  hasModal: boolean;
  href: string;
  id: number;
  text: string;
}

export interface IFloatingMenuProps {
  items?: IMenuItems[];
  position?: IMenuPosition;
}

export function FloatingMenu({
  position = 'Right',
  items,
}: IFloatingMenuProps): ReactElement {
  const [openedItem, setOpenedItem] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleOpen = (index: number) => () => {
    setOpenedItem(openedItem === index ? null : index);
  };

  const handleMouseEnter = (index: number) => () => {
    setHoveredItem(index);
  };

  const handleClose: () => void = () => {
    setOpenedItem(null);
    setHoveredItem(null);
  };

  const icons = [FileText, Star, Newspaper, CalendarBlank, Question];

  const matches = useMediaQuery('(max-width: 36em)');
  const positionClass = !matches
    ? position === 'Right'
      ? classes.positionRight
      : classes.positionLeft
    : '';

  return (
    <Flex
      bg="white"
      className={`${classes.floatingMenuContainer} ${positionClass}`}
      mih={50}
      wrap="wrap"
    >
      {items?.map((item, index) => {
        const Icon = icons[index];

        return (
          <Group
            key={`${index + index}`}
            className={`${classes.floatingMenuItem} ${
              openedItem === index || hoveredItem === index
                ? classes.isOpened
                : ''
            }`}
            justify="center"
            onClick={item.hasModal ? handleOpen(index) : undefined}
            onMouseEnter={handleMouseEnter(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <ActionIcon
              aria-label={item.text}
              className={`${classes.floatingMenuButton}`}
              color={
                openedItem === index || hoveredItem === index
                  ? 'white'
                  : 'black'
              }
              component={item.hasModal ? 'button' : 'a'}
              display="flex"
              href={!item.hasModal ? item.href : ''}
              variant="transparent"
            >
              <Icon size={24} />
              {hoveredItem === index || matches ? (
                <Text
                  ml={!matches && position === 'Right' ? '10px' : ''}
                  mr={!matches && position === 'Left' ? '10px' : ''}
                  mt={matches ? '10px' : ''}
                  size="12px"
                  style={{ width: '100%' }}
                  truncate="end"
                >
                  {item.text}
                </Text>
              ) : (
                ''
              )}
            </ActionIcon>

            {item.hasModal ? (
              <Modal
                onClose={handleClose}
                opened={openedItem === index}
                overlayProps={{
                  backgroundOpacity: 0.3,
                }}
              >
                {item.text}
              </Modal>
            ) : (
              ''
            )}
          </Group>
        );
      })}
    </Flex>
  );
}
