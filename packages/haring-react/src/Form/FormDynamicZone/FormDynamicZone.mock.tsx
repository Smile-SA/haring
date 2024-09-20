import type {
  IBaseBlock,
  IBaseBlockFull,
  IFormDynamicZoneBlock,
} from '../../types';
import type { ReactElement } from 'react';

import { Group } from '@mantine/core';
import { Cube, Leaf } from '@phosphor-icons/react';

export interface IExampleBlock extends IBaseBlock {
  value?: string;
}

export const blocksMock: IBaseBlockFull<IExampleBlock>[] = [
  {
    blockHeader: (
      <>
        <Cube key="1" />
        <span key="2">Example A</span>
      </>
    ),
    blockType: 'exampleA',
    id: '0',
    opened: true,
    value: 'existing value',
  },
  {
    blockHeader: (
      <>
        <Leaf key="1" />
        <span key="2">Example B</span>
      </>
    ),
    blockType: 'exampleB',
    id: '1',
    opened: true,
    value: 'selectB',
  },
];

export const availableBlocksMock: IFormDynamicZoneBlock<IExampleBlock>[] = [
  {
    block: {
      blockType: 'exampleA',
      opened: true,
      value: '',
    },
    blockOptions: {
      blockHeader: (
        <>
          <Cube key="1" />
          <span key="2">Example A</span>
        </>
      ),
    },
    button: {
      blockType: 'exampleA',
      label: 'Example A',
      leftSection: <Cube />,
    },
    renderFunc: (b: IExampleBlock, i: number): ReactElement => {
      return (
        <Group>
          <input
            key={b.id + 1}
            defaultValue={b.value}
            id={`example.${i}.input1`}
            placeholder="nested field 1"
            required
          />
          <input
            key={b.id + 2}
            id={`example.${i}.input2`}
            placeholder="nested field 2"
            required
          />
        </Group>
      );
    },
  },
  {
    block: {
      blockType: 'exampleB',
      opened: true,
      value: '',
    },
    blockOptions: {
      blockHeader: (
        <>
          <Leaf key="1" />
          <span key="2">Example B</span>
        </>
      ),
    },
    button: {
      blockType: 'exampleB',
      label: 'Example B',
      leftSection: <Leaf />,
    },
    renderFunc: (b: IExampleBlock, i: number): ReactElement => {
      return (
        <select key={b.id} defaultValue={b.value} id={`example.${i}`} required>
          <option disabled value="">
            -- Please choose an option --
          </option>
          <option value="selectA">Value A</option>
          <option value="selectB">Value B</option>
        </select>
      );
    },
  },
];
