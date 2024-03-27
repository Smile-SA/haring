import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { FetchAutocompleteField } from './FetchAutocompleteField';

describe('FetchAutocompleteField', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <FetchAutocompleteField minValueLength={0} />,
    );
    expect(container).toMatchSnapshot();
  });
});
