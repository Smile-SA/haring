import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { AddressAutocompleteForm } from './AddressAutocompleteForm';

describe('FetchAutocompleteField', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<AddressAutocompleteForm />);
    expect(container).toMatchSnapshot();
  });
});
