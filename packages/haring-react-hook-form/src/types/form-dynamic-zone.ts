import type { IBaseBlock, IBaseBlockButton } from '@smile/haring-react';
import type { IOmitRespectIndexSignature } from '@smile/haring-react-shared';
import type { ReactElement } from 'react';
import type { UseFormRegister } from 'react-hook-form/dist/types/form';

export interface IFormField extends IBaseBlock {
  // fieldId: string;
  value?: string;
}

export interface IFormFieldWithoutId
  extends IOmitRespectIndexSignature<IFormField, 'id'> {
  id?: never; // forbid property "id" from being declared, to never override the internal IBaseBlock.id which is only used by useFieldArray()
}

export type IFormRegisterFunc<
  T extends IFormFieldWithoutId = IFormFieldWithoutId,
> = UseFormRegister<Record<string, T[]>>;

export interface IFormDynBlock {
  block: IFormFieldWithoutId;
  button: IBaseBlockButton;
  renderFunc: (
    block: IFormField,
    index: number,
    registerFunc: IFormRegisterFunc,
    registerName: string,
  ) => ReactElement;
}

export type IFormDynSubmit = Record<string, IFormFieldWithoutId[]>;
