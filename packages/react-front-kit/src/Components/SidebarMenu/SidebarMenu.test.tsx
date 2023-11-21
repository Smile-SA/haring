import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { SidebarMenu } from './SidebarMenu';
import { menu } from './SidebarMenu.mock';

describe('Header', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<SidebarMenu menu={menu} />);
    expect(container).toMatchSnapshot();
  });
});
