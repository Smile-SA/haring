import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { MenuLang } from './MenuLang';

describe('MenuLang', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<MenuLang />);
    expect(container).toMatchSnapshot();
  });
});
