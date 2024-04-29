import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { IconCard } from './IconCard';

describe('IconCard', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<IconCard />);
    expect(container).toMatchSnapshot();
  });
});
