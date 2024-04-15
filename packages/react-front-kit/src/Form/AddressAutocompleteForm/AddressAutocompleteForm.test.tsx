import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { AddressGouvAutocompleteField } from './AddressAutocompleteForm';

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
