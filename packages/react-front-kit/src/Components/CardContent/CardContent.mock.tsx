import {
  ActionIcon,
  Avatar,
  Button,
  Flex,
  Indicator,
  Text,
} from '@mantine/core';
import { Export, Eye, UserCircle } from '@phosphor-icons/react';

export const defaultCardContentMock = {
  children: 'children node',
  leftNode: 'left node',
  rightNode: 'right node',
  titleNode: 'title node',
  topNode: 'top node',
};

export const topMock = (
  <span style={{ color: '#5C5F66', fontSize: 12 }}>30th novembre 2023</span>
);

export const otherTopMock = (
  <span style={{ color: '#5C5F66', fontSize: 12 }}>3 hours ago</span>
);

export const titleMock = <b>Lorem ipsum dolor sit amet</b>;

export const otherTitleMock = (
  <span>
    <b>Lorem ipsum</b>
    <span>
      {' '}
      dolor sit amet consectetur. Sollicitudin mattis blandit aliquet odio urna
      mi id :{' '}
    </span>
    <Text c="blue" component="span">
      Lorem Ipsum dolor
    </Text>
  </span>
);

export const childrenExampleMock = (
  <Flex direction="column" gap={24}>
    <span>
      Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis blandit
      aliquet odio urna mi id. Mauris venenatis ut et at amet vel est.
    </span>
    <Flex justify="space-between" style={{ width: '100%' }}>
      <Button color="green" variant="light">
        Approved
      </Button>
      <Flex align="center" gap={16}>
        <ActionIcon color="cyan" size={24}>
          <Export size={20} />
        </ActionIcon>
        <ActionIcon color="cyan" size={24}>
          <Eye size={20} />
        </ActionIcon>
      </Flex>
    </Flex>
  </Flex>
);

export const rightMock = (
  <ActionIcon color="cyan" size={24}>
    <Export size={24} />
  </ActionIcon>
);

export const leftMock = (
  <Indicator color="red" inline offset={8} withBorder>
    <Avatar size={40}>
      <UserCircle size={40} />
    </Avatar>
  </Indicator>
);
