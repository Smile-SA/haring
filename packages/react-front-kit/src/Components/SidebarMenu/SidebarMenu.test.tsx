import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { SidebarMenu } from './SidebarMenu';
import { menuMock } from './SidebarMenu.mock';

describe('SidebarMenu', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<SidebarMenu menu={menuMock} />);
    expect(container).toMatchSnapshot();
  });
});
