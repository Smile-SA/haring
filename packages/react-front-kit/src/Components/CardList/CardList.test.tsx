import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { CardList } from './CardList';

describe('CardList', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<CardList />);
    expect(container).toMatchSnapshot();
  });
});
