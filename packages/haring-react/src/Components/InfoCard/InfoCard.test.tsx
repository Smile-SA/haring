import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { InfoCard } from './InfoCard';

describe('InfoCard', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<InfoCard />);
    expect(container).toMatchSnapshot();
  });
});
