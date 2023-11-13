import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';

import { Filters } from './Filters';

describe('Filters', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<Filters />);
    expect(container).toMatchSnapshot();
  });
});
