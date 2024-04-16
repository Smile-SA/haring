import type { IAdressFields } from './AddressAutocompleteFields';

export function onOptionSubmitMock(value: {
  value: {
    properties?: {
      city?: string;
      housenumber?: string;
      number?: string;
      postcode?: string;
      street?: string;
    };
  };
}): IAdressFields {
  const address = value.value.properties;
  console.log(address);
  return {
    city: address?.city,
    country: 'France',
    number: address?.housenumber,
    postCode: address?.postcode,
    street: address?.street,
  };
}
