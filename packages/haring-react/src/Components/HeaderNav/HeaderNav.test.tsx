import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { menusMock } from '../Header/Header.mock';

import { HeaderNav } from './HeaderNav';

describe('HeaderNav', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot in desktop mode', () => {
    const { container } = renderWithProviders(<HeaderNav menus={menusMock} />);
    expect(container).toMatchSnapshot();
  });
  it('matches snapshot in mobile mode', () => {
    const { container } = renderWithProviders(
      <HeaderNav isMobile menus={menusMock} />,
    );
    expect(container).toMatchSnapshot();
  });
});
