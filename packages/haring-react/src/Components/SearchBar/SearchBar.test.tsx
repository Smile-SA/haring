import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <SearchBar id="search-bar-test" />,
    );
    expect(container).toMatchSnapshot();
  });
});
