import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';

import { HeaderSearch } from './HeaderSearch';

describe('Header', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<HeaderSearch />);
    expect(container).toMatchSnapshot();
  });
});
