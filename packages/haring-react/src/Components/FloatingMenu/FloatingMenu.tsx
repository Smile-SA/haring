'use client';
import type { ReactElement } from 'react';

import { ActionIcon, Flex, Group, Modal, Text } from '@mantine/core';
import {
  CalendarBlank,
  FileText,
  Newspaper,
  Question,
  Star,
} from '@phosphor-icons/react';
import { useState } from 'react';

import classes from './FloatingMenu.module.css';

type IMenuPosition = 'left' | 'right';

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

const icons = [FileText, Star, Newspaper, CalendarBlank, Question];

export function FloatingMenu(props: IFloatingMenuProps): ReactElement {
  const { position = 'right', items } = props;

  const [openedItem, setOpenedItem] = useState<number | null>(null);

  const handleOpen = (index: number) => () => {
    setOpenedItem(openedItem === index ? null : index);
  };

  const handleClose: () => void = () => {
    setOpenedItem(null);
  };

  const positionClass = position === 'right' ? classes.right : classes.left;
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
              openedItem === index ? classes.isOpened : ''
            }`}
            justify="center"
            onClick={item.hasModal ? handleOpen(index) : undefined}
          >
            <ActionIcon
              aria-label={item.text}
              className={classes.floatingMenuButton}
              color={openedItem === index ? 'white' : 'black'}
              component={item.hasModal ? 'button' : 'a'}
              display="flex"
              href={!item.hasModal ? item.href : ''}
              variant="transparent"
            >
              <Icon size={24} />
              <Text
                className={classes.floatingMenuLabel}
                size="12px"
                style={{ width: '100%' }}
                truncate="end"
              >
                {item.text}
              </Text>
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
