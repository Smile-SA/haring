import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { AddressGouvAutocompleteField } from './AddressGouvAutocompleteField';

describe('FetchAutocompleteField', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <AddressGouvAutocompleteField minValueLength={12} />,
    );
    expect(container).toMatchSnapshot();
  });
});
