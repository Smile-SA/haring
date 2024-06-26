'use client';

import type { IAddressGouvData } from '../FetchAutocompleteField/FetchAutoCompleteField.mock';
import type {
  IFetchAutocompleteFieldProps,
  IValue,
} from '../FetchAutocompleteField/FetchAutocompleteField';
import type { ReactElement } from 'react';

import { FetchAutocompleteField } from '../FetchAutocompleteField/FetchAutocompleteField';

export interface IAddressAutocompleteFieldProps
  extends Omit<IFetchAutocompleteFieldProps<IAddressGouvData>, 'onFetchData'> {
  lat?: string;
  limit?: number;
  lon?: string;
  onFetchData?: (value: string) => Promise<IValue<IAddressGouvData>[]>;
  type?: string;
}

export function AddressGouvAutocompleteField(
  props: IAddressAutocompleteFieldProps,
): ReactElement {
  const {
    lat = '',
    limit = 10,
    lon = '',
    type = '',
    ...fetchAutocompleteFieldProps
  } = props;
  async function getDataAddressGouv(
    value: string,
  ): Promise<IValue<IAddressGouvData>[]> {
    const response = await fetch(
      `https://api-Adresse.data.gouv.fr/search/?q=${encodeURIComponent(
        value,
      )}&autocomplete=1&lat=${lat}&lon=${lon}&type=${type}&limit=${limit}`,
    );
    const data: { features: IAddressGouvData[] } = await response.json();
    const result = data.features.map((element) => {
      return { label: element.properties.label, value: element };
    });

    return result;
  }
  return (
    <FetchAutocompleteField
      {...fetchAutocompleteFieldProps}
      onFetchData={getDataAddressGouv}
    />
  );
}
