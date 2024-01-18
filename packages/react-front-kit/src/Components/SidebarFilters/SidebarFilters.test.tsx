import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { SidebarFilters } from './SidebarFilters';
import { activeFilters, getMenu } from './SidebarFilters.mock';

describe('SidebarFilters', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <SidebarFilters
        activeFilters={activeFilters}
        defaultOpenedMenuIds={[1, 3, 10, 11]}
        deleteButtonLabel="Remove all"
        filterButtonLabel="Filtrer"
        menus={getMenu(true)}
        title="Active filters"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
