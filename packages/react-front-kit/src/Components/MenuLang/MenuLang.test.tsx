import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { langs } from './ManuLang.mock';
import { MenuLang } from './MenuLang';

describe('MenuLang', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <MenuLang defaultCurrent="FR" langs={langs} />,
    );
    expect(container).toMatchSnapshot();
  });
});
