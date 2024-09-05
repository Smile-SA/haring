import type { IFormDynBlock, IFormField, IFormRegisterFunc } from '../../types';
import type { ReactElement } from 'react';

import { Alien, Cube, Leaf, TreasureChest } from '@phosphor-icons/react';

export const blockOptionsMock = [
  { id: 'default', label: 'Default', leftSection: <Alien /> },
  { id: 'other', label: 'Other', leftSection: <Leaf /> },
  { id: 'stuff', label: 'Stuff', leftSection: <TreasureChest /> },
];

export const dynamicBlocksMock: IFormDynBlock[] = [
  {
    block: {
      blockHeader: (
        <>
          <Cube key="1" />
          <span key="2">Example</span>
        </>
      ),
      blockType: 'default',
      opened: true,
      value: 'initial',
    },
    button: {
      blockType: 'default',
      label: 'Example',
      leftSection: <Cube />,
    },
    renderFunc: (
      b: IFormField,
      _i: number,
      register: IFormRegisterFunc,
      registerName: string,
    ): ReactElement => {
      return (
        <>
          <span>works</span>
          <input key={b.id} {...register(registerName)} />
        </>
      );
    },
  },
];
