import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { MenuLang } from './MenuLang';
import { languages } from './MenuLang.mock';

describe('MenuLang', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <MenuLang defaultCurrent="FR" languages={languages} />,
    );
    expect(container).toMatchSnapshot();
  });
});
