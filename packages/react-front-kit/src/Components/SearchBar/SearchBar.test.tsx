import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';

import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <SearchBar id="search-bar-test" />,
    );
    expect(container).toMatchSnapshot();
  });
});
