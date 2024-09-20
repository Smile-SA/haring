import type { IBaseBlock, IFormDynamicZoneBlock } from '@smile/haring-react';
import type { IExampleBlock } from '@smile/haring-react/src/Form/FormDynamicZone/FormDynamicZone.mock';
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
    value: 'existing value',
  },
  {
    blockType: 'exampleB',
    id: '1',
    opened: true,
    selected: 'existing selection',
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
    getValues,
    watch,
    // formState: { errors },
  } = useForm<IFields>({
    defaultValues: {
      content: initialBlocks,
      email: '',
      termsOfService: false,
    },
  });
  const { fields, append, remove, swap, update } = useFieldArray({
    control,
    name: 'content',
  });
  const onValidSubmit: SubmitHandler<IFields> = (data) => onFormSubmit(data);
  const onInvalidSubmit: SubmitErrorHandler<IFields> = (errors) =>
    onFormErrors(errors);

  function onToggle(index: number, opened: boolean): void {
    const updatedBlock = getValues('content')[index];
    update(index, { ...updatedBlock, opened });
  }

  const availableBlocks: IFormDynamicZoneBlock<IDynamicContents>[] = [
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
              {...register(`content.${i}.value.input1`, {
                minLength: 3,
                required: 'This field is required',
              })}
              placeholder="nested field 1"
            />
            <input
              key={b.id + 2}
              {...register(`content.${i}.value.input2`, {
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
        blockType: 'exampleB',
        opened: true,
        selected: '',
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
          <select
            key={b.id}
            {...register(`content.${i}.selected`, {
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

  console.log('watch', watch('content'));
  // TODO: everything important seems to work, now test default values (first in the sense of giving an existing array of blocks with existing values,
  //  feeding it into the form defaultValues and sending it down into the dynamic zone,
  //  then maybe some way to give default values on register?,
  //  then test error display and various complex use cases,
  //  then add the feature of limited quantity of some blocks (through the blockOptions probably, and i'd assume at the FormDynamicZone level?)
  //  then maybe test animations

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
            onAppendUpdate={(newBlock: IDynamicContents) => append(newBlock)}
            onRemoveUpdate={(i: number) => remove(i)}
            onSwapUpdate={(i: number, ii: number) => swap(i, ii)}
            onToggleUpdate={onToggle}
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
