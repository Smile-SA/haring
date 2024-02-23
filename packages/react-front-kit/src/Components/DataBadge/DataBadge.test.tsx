import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { DataBadge } from './DataBadge';

describe('DataBadge', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<DataBadge />);
    expect(container).toMatchSnapshot();
  });
});
