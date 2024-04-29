import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { HeaderSearch } from './HeaderSearch';

describe('HeaderSearch', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <HeaderSearch id="header-search-test" />,
    );
    expect(container).toMatchSnapshot();
  });
});
