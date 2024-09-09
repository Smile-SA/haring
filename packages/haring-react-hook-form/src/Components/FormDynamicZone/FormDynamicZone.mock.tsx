import type { IFormDynBlock, IFormField, IFormRegisterFunc } from '../../types';
import type { ReactElement } from 'react';

import { Group } from '@mantine/core';
import { Cube, Leaf } from '@phosphor-icons/react';

export const dynamicBlocksMock: IFormDynBlock[] = [
  {
    block: {
      blockHeader: (
        <>
          <Cube key="1" />
          <span key="2">Example A</span>
        </>
      ),
      blockType: 'exampleA',
      opened: true,
      value: '',
    },
    button: {
      blockType: 'exampleA',
      label: 'Example A',
      leftSection: <Cube />,
    },
    renderFunc: (
      b: IFormField,
      _i: number,
      register: IFormRegisterFunc,
      registerName: string,
    ): ReactElement => {
      return (
        <Group>
          <input
            key={b.id + 1}
            {...register(`${registerName}.input1`, {
              minLength: 3,
              required: true,
            })}
            placeholder="nested field 1"
            required
          />
          <input
            key={b.id + 2}
            {...register(`${registerName}.input2`, {
              required: true,
            })}
            placeholder="nested field 2"
            required
          />
        </Group>
      );
    },
  },
  {
    block: {
      blockHeader: (
        <>
          <Leaf key="1" />
          <span key="2">Example B</span>
        </>
      ),
      blockType: 'exampleB',
      opened: true,
      value: '',
    },
    button: {
      blockType: 'exampleB',
      label: 'Example B',
      leftSection: <Leaf />,
    },
    renderFunc: (
      b: IFormField,
      _i: number,
      register: IFormRegisterFunc,
      registerName: string,
    ): ReactElement => {
      return (
        <select
          key={b.id}
          {...register(registerName, { required: true })}
          required
        >
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
