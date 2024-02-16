import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { DashboardCard } from './DashboardCard';

describe('DashboardCard', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<DashboardCard />);
    expect(container).toMatchSnapshot();
  });
});
