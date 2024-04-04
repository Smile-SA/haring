/* eslint-disable @typescript-eslint/naming-convention */
'use client';

import type {
  IFetchAutocompleteFieldProps,
  IValue,
} from '../FetchAutocompleteField/FetchAutocompleteField';
import type { ReactElement } from 'react';

import { getDataAddressGouvMock } from '../FetchAutocompleteField/FetchAutoCompleteField.mock';
import { FetchAutocompleteField } from '../FetchAutocompleteField/FetchAutocompleteField';

export interface IAdressAutocompleteFieldProps<F>
  extends Omit<IFetchAutocompleteFieldProps<F>, 'onFetchData'> {
  onFetchData?: (value: string) => Promise<IValue<F>[]>;
}

export function AdressGouvAutocompleteField<F>(
  props: IFetchAutocompleteFieldProps<F>,
): ReactElement {
  const { ...fetchAutocompleteFieldProps } = props;
  return (
    <FetchAutocompleteField
      {...fetchAutocompleteFieldProps}
      onFetchData={getDataAddressGouvMock}
    />
  );
}
