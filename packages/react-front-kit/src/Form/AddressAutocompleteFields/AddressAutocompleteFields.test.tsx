import type { IAddressFieldsValues } from '../AddressFields/AddressFields';
import type { IValue } from '../FetchAutocompleteField/FetchAutocompleteField';

import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { AddressAutocompleteFields } from './AddressAutocompleteFields';

describe('FetchAutocompleteField', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <AddressAutocompleteFields
        onFetchData={function (_value: string): Promise<IValue<unknown>[]> {
          return [
            { label: 'test', value: { Address: 'test', Number: 'test' } },
          ] as unknown as Promise<IValue<unknown>[]>;
        }}
        onOptionSubmit={function (_value: unknown): IAddressFieldsValues {
          return {
            city: 'city',
            country: 'country',
            number: 'number',
            postCode: 'postCode',
            street: 'street',
          };
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
