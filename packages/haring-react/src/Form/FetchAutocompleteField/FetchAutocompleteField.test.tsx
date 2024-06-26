import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { FetchAutocompleteField } from './FetchAutocompleteField';

describe('FetchAutocompleteField', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <FetchAutocompleteField
        minValueLength={12}
        // @ts-expect-error-type
        onFetchData={() => {
          return [
            { label: 'Lyon test', value: { CityName: 'lyon' } },
            { label: 'Lyon 1 test', value: { CityName: 'lyon 1' } },
          ];
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
