import type { IExampleBlock } from '@smile/haring-react/src/Form/FormDynamicZone/FormDynamicZone.mock';
import type {
  IBaseBlock,
  IFormDynamicZoneBlock,
} from '@smile/haring-react/src/types';
import type { ReactElement } from 'react';
import type {
  FieldErrors,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';

import { Box, Group, Stack } from '@mantine/core';
import { Cube, Leaf } from '@phosphor-icons/react';
import { FormDynamicZone } from '@smile/haring-react';
import { useFieldArray, useForm } from 'react-hook-form';

import { withExceptionCapturing } from '../utilities/react-hook-form-utilities';

interface IContentA extends IBaseBlock {
  value: string;
}

interface IContentB extends IBaseBlock {
  selected: string;
}

type IDynamicContents = IContentA | IContentB;

const initialBlocks: IDynamicContents[] = [
  {
    blockType: 'exampleA',
    id: '0',
    opened: true,
  },
  {
    blockType: 'exampleB',
    id: '1',
    opened: true,
  },
];

interface IFields {
  content: IDynamicContents[];
  email: string;
  termsOfService: boolean;
}

export interface IReactHookFormProps {
  onFormErrors: (errors: FieldErrors<IFields>) => void;
  onFormSubmit: (data: IFields) => void;
}

export function ReactHookFormDynamicZone(
  props: IReactHookFormProps,
): ReactElement {
  const { onFormErrors, onFormSubmit } = props;
  const {
    control,
    handleSubmit,
    register,
    // formState: { errors },
  } = useForm<IFields>({
    defaultValues: {
      content: initialBlocks,
      email: '',
      termsOfService: false,
    },
  });
  const { fields, replace } = useFieldArray({ control, name: 'content' });
  const onValidSubmit: SubmitHandler<IFields> = (data) => onFormSubmit(data);
  const onInvalidSubmit: SubmitErrorHandler<IFields> = (errors) =>
    onFormErrors(errors);

  const availableBlocks: IFormDynamicZoneBlock<IDynamicContents>[] = [
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
      renderFunc: (b: IExampleBlock, i: number): ReactElement => {
        return (
          <Group>
            <input
              key={b.id + 1}
              {...register(`content.${i}.input1`, {
                minLength: 3,
                required: 'This field is required',
              })}
              placeholder="nested field 1"
            />
            <input
              key={b.id + 2}
              {...register(`content.${i}.input1`, {
                minLength: 3,
                required: 'This field is required',
              })}
              placeholder="nested field 2"
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
        selected: '',
      },
      button: {
        blockType: 'exampleB',
        label: 'Example B',
        leftSection: <Leaf />,
      },
      renderFunc: (b: IExampleBlock, i: number): ReactElement => {
        return (
          <select
            key={b.id}
            {...register(`content.${i}`, {
              required: 'This field is required',
            })}
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

  return (
    <Box mx="auto">
      <form
        onSubmit={withExceptionCapturing(
          handleSubmit(onValidSubmit, onInvalidSubmit),
        )}
      >
        <Stack>
          <FormDynamicZone<IDynamicContents>
            availableBlocks={availableBlocks}
            blocksArray={fields}
            onUpdatedArray={(blocks) => replace(blocks)}
          />
          <input type="submit" />
          {/* <ErrorMessage*/}
          {/*  errors={errors}*/}
          {/*  name="content.0.input1"*/}
          {/*  render={({ messages }) =>*/}
          {/*    messages &&*/}
          {/*    Object.entries(messages).map(([type, message]) => (*/}
          {/*      <p key={type}>{message}</p>*/}
          {/*    ))*/}
          {/*  }*/}
          {/*/ >*/}
        </Stack>
      </form>
    </Box>
  );
}
