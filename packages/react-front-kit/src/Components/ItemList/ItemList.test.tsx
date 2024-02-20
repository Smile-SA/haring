import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { ItemList } from './ItemList';

describe('ItemList', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<ItemList />);
    expect(container).toMatchSnapshot();
  });
});
