import { Center } from '@mantine/core';
import { ListBullets, SquaresFour, Star } from '@phosphor-icons/react';

export const viewMockA = (
  <Center
    style={{
      backgroundColor: 'lightgray',
      height: 200,
    }}
  >
    View A
  </Center>
);

export const viewMockB = (
  <Center
    style={{
      backgroundColor: 'lightblue',
      height: 200,
    }}
  >
    View B
  </Center>
);

export const viewMockC = (
  <Center
    style={{
      backgroundColor: 'lightpink',
      height: 200,
    }}
  >
    View C
  </Center>
);

export const viewsMock = [
  {
    dataView: viewMockA,
    label: <ListBullets />,
    value: 'a',
  },
  {
    dataView: viewMockB,
    label: <SquaresFour />,
    value: 'b',
  },
  {
    dataView: viewMockC,
    label: <Star />,
    value: 'c',
  },
];
