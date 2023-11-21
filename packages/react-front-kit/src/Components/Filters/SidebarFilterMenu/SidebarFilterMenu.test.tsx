import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { SidebarFilterMenu } from './SidebarFilterMenu';

describe('SidebarFilterMenu', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<SidebarFilterMenu />);
    expect(container).toMatchSnapshot();
  });
});
