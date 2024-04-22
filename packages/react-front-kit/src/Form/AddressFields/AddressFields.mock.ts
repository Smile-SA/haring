import type { IAdressFields } from './AddressFields';
import type { IAddressGouvData } from '../FetchAutocompleteField/FetchAutoCompleteField.mock';
import type { IValue } from '../FetchAutocompleteField/FetchAutocompleteField';

export function onOptionSubmitMock(
  value: IValue<IAddressGouvData>,
): IAdressFields {
  const address = value.value.properties;
  return {
    city: address.city,
    country: 'France',
    number: address.housenumber,
    postCode: address.postcode,
    street: address.street,
  };
}
