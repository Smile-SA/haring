import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { HeaderSearch } from './HeaderSearch';

describe('HeaderSearch', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <HeaderSearch id="header-search-test" />,
    );
    expect(container).toMatchSnapshot();
  });
});
