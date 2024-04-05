import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { AdressGouvAutocompleteField } from './AdressGouvAutocompleteField';

describe('FetchAutocompleteField', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <AdressGouvAutocompleteField minValueLength={12} />,
    );
    expect(container).toMatchSnapshot();
  });
});
