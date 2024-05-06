import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { menusMock } from '../Header/Header.mock';

import { HeaderMenu } from './HeaderMenu';

describe('HeaderMenu', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot in desktop mode', () => {
    const { container } = renderWithProviders(<HeaderMenu menus={menusMock} />);
    expect(container).toMatchSnapshot();
  });
  it('matches snapshot in mobile mode', () => {
    const { container } = renderWithProviders(
      <HeaderMenu isMobile menus={menusMock} />,
    );
    expect(container).toMatchSnapshot();
  });
});
