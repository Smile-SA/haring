import type { ReactElement } from 'react';

import {
  ActionIcon,
  Avatar,
  Button,
  Flex,
  Indicator,
  Text,
} from '@mantine/core';
import { Export, Eye, UserCircle } from '@phosphor-icons/react';

import { ActionRowOverflow } from '../ActionRowOverflow/ActionRowOverflow';
import {
  actionRowOverflowActionsMock,
  actionRowOverflowSelectedMock,
} from '../ActionRowOverflow/ActionRowOverflow.mock';

export const defaultSummaryBoxMock = {
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
      dolor sit amet consectetur. Sollicitudin mattis blandit aliquet odio urna
      mi id :
    </span>
    <Text c="blue" component="span">
      Lorem Ipsum dolor
    </Text>
  </span>
);

export const childrenExampleMock = (key?: number): ReactElement => (
  <Flex key={key} direction="column" gap={24}>
    <span>
      Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis blandit
      aliquet odio urna mi id. Mauris venenatis ut et at amet vel est.
    </span>
    <Flex justify="space-between" style={{ width: '100%' }}>
      <Button color="green" variant="light">
        Approved
      </Button>
      <Flex align="center" gap={16}>
        <ActionIcon color="cyan" size={30} variant="subtle">
          <Export size={24} />
        </ActionIcon>
        <ActionIcon color="cyan" size={30} variant="subtle">
          <Eye size={24} />
        </ActionIcon>
      </Flex>
    </Flex>
  </Flex>
);

export const otherChildrenExampleMock = (
  <Flex direction="column" gap={24}>
    <span>
      Lorem ipsum dolor sit amet consectetur. Sollicitudin mattis blandit
      aliquet odio urna mi id.
    </span>
    <Flex gap={5} justify="start" style={{ width: '100%' }} wrap="wrap">
      <Button color="green" variant="light">
        Approved
      </Button>
      <Button color="orange" variant="light">
        In Progress
      </Button>
      <Button color="white" variant="light">
        Paused
      </Button>
      <Button color="red" variant="light">
        Blocked
      </Button>
      <Button color="black" variant="default">
        Rejected
      </Button>
    </Flex>
  </Flex>
);

export const rightMock = (
  <ActionIcon color="cyan" size={30} variant="subtle">
    <Export size={24} />
  </ActionIcon>
);

export const actionRightMock = (
  <ActionRowOverflow
    actions={actionRowOverflowActionsMock}
    isCompactStyle
    rowActionNumber={1}
    selectedElements={actionRowOverflowSelectedMock}
  />
);

export const leftMock = (
  <Indicator color="red" inline offset={8} withBorder>
    <Avatar size={40}>
      <UserCircle size={40} />
    </Avatar>
  </Indicator>
);
