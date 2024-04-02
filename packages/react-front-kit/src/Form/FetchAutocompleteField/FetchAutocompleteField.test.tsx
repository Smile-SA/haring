import type { IValue } from './FetchAutocompleteField';

import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { FetchAutocompleteField } from './FetchAutocompleteField';

describe('FetchAutocompleteField', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <FetchAutocompleteField
        baseUrl="https://www.google.fr"
        fetchDataLabelKey=""
        minValueLength={12}
        transformResultsFunction={function (): IValue<unknown>[] {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
