import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { IconCard } from './IconCard';

describe('IconCard', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<IconCard />);
    expect(container).toMatchSnapshot();
  });
});
