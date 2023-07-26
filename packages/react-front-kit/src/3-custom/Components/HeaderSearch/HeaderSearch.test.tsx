import { renderWithProviders } from '../../../utils/tests';

import { HeaderSearch } from './HeaderSearch';

describe('Header', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<HeaderSearch />);
    expect(container).toMatchSnapshot();
  });
});
