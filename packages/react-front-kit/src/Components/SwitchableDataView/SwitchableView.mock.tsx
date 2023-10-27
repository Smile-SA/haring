import { Center } from '@mantine/core';
import { ListBullets, SquaresFour, Star } from '@phosphor-icons/react';

export const viewA = (
  <Center
    style={{
      backgroundColor: 'lightgray',
      height: 200,
    }}
  >
    View A
  </Center>
);

export const viewB = (
  <Center
    style={{
      backgroundColor: 'lightblue',
      height: 200,
    }}
  >
    View B
  </Center>
);

export const viewC = (
  <Center
    style={{
      backgroundColor: 'lightpink',
      height: 200,
    }}
  >
    View C
  </Center>
);

export const views = [
  {
    dataView: viewA,
    label: <ListBullets />,
    value: 'a',
  },
  {
    dataView: viewB,
    label: <SquaresFour />,
    value: 'b',
  },
  {
    dataView: viewC,
    label: <Star />,
    value: 'c',
  },
];
