import type { IAddressFieldsValues } from './AddressFields';

import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { AddressFields } from './AddressFields';

describe('FetchAutocompleteField', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <AddressFields
        onChange={function (value: IAddressFieldsValues): void {
          // eslint-disable-next-line no-console
          console.log(value);
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
