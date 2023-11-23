import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { Filters } from './Filters';

describe('Filters', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<Filters />);
    expect(container).toMatchSnapshot();
  });
});
