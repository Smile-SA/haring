import { menu } from '@smile/react-front-kit/src/Components/SidebarMenu/SidebarMenu.mock';
import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';

import { SortableSidebarMenu } from './SortableSidebarMenu';

describe('SortableSidebarMenu', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <SortableSidebarMenu menu={menu} />,
    );
    expect(container).toMatchSnapshot();
  });
});
