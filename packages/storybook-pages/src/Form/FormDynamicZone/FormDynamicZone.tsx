import type { IExampleBlock } from './FormDynamicZone.mock';
import type { IBaseBlock, IDynamicZoneBlock } from '@smile/haring-react';
import type { ReactElement } from 'react';
import type {
  FieldErrors,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';
import type { UseFormRegister } from 'react-hook-form/dist/types/form';

import { ErrorMessage } from '@hookform/error-message';
import { Box, Group, Stack } from '@mantine/core';
import { Cube, Leaf } from '@phosphor-icons/react';
import { DynamicZone } from '@smile/haring-react';
import { useFieldArray, useForm } from 'react-hook-form';

import { withExceptionCapturing } from '../utilities/react-hook-form-utilities';

import { CommonFormErrorText } from './FormDynamicZone.mock';

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

const availableBlock: (
  register: UseFormRegister<IFields>,
  errors: object,
) => IDynamicZoneBlock<IDynamicContents>[] = (register, errors) => [
  {
    block: {
      blockType: 'exampleA',
      opened: true,
      value: '',
    },
    blockButtonOptions: {
      blockType: 'exampleA',
      label: 'Example A',
      leftSection: <Cube />,
    },
    blockCardOptions: {
      blockFooter: (_b, i) => (
        <Stack>
          <ErrorMessage
            errors={errors}
            name={`content.${i}.value.input1`}
            render={({ message }: { message: string }) => (
              <CommonFormErrorText message={message} />
            )}
          />
          <ErrorMessage
            errors={errors}
            name={`content.${i}.value.input2`}
            render={({ message }: { message: string }) => (
              <CommonFormErrorText message={message} />
            )}
          />
        </Stack>
      ),
      blockHeader: (
        <>
          <Cube key="1" />
          <span key="2">Example A</span>
        </>
      ),
    },
    renderFunc: (b: IExampleBlock, i: number): ReactElement => {
      return (
        <Group>
          <input
            key={b.id + 1}
            {...register(`content.${i}.value.input1`, {
              minLength: { message: '3 characters minimum', value: 3 },
              required: 'The first field is required',
            })}
            placeholder="nested field 1"
          />
          <input
            key={b.id + 2}
            {...register(`content.${i}.value.input2`, {
              minLength: { message: '3 characters minimum', value: 3 },
              required: 'The second field is required',
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
    blockButtonOptions: {
      blockType: 'exampleB',
      label: 'Example B',
      leftSection: <Leaf />,
    },
    blockCardOptions: {
      blockFooter: (_b, i) => (
        <ErrorMessage
          errors={errors}
          name={`content.${i}.selected`}
          render={({ message }: { message: string }) => (
            <CommonFormErrorText message={message} />
          )}
        />
      ),
      blockHeader: (
        <>
          <Leaf key="1" />
          <span key="2">Example B</span>
        </>
      ),
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

interface IFields {
  content: IDynamicContents[];
  email: string;
  termsOfService: boolean;
}

export interface IReactHookFormProps {
  onFormErrors: (errors: FieldErrors<IFields>) => void;
  onFormSubmit: (data: IFields) => void;
}

export function FormDynamicZone(props: IReactHookFormProps): ReactElement {
  const { onFormErrors, onFormSubmit } = props;
  const {
    control,
    handleSubmit,
    register,
    getValues,
    formState: { errors },
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

  return (
    <Box mx="auto">
      <form
        onSubmit={withExceptionCapturing(
          handleSubmit(onValidSubmit, onInvalidSubmit),
        )}
      >
        <Stack>
          <DynamicZone<IDynamicContents>
            availableBlocks={availableBlock(register, errors)}
            blocksArray={fields}
            onAppendUpdate={(newBlock: IDynamicContents) => append(newBlock)}
            onRemoveUpdate={(i: number) => remove(i)}
            onSwapUpdate={(i: number, ii: number) => swap(i, ii)}
            onToggleUpdate={onToggle}
          />
          <input type="submit" />
        </Stack>
      </form>
    </Box>
  );
}
