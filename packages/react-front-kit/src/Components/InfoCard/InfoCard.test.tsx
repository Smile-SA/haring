import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';

import { InfoCard } from './InfoCard';

describe('InfoCard', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<InfoCard />);
    expect(container).toMatchSnapshot();
  });
});
