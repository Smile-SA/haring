import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { menuWithoutContent } from './SidebarFilterMenu/SidebarFilterMenu.mock';
import { SidebarFilters } from './SidebarFilters';
import { activeFilters } from './SidebarFilters.mock';

describe('FiltersBar', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <SidebarFilters
        activeFilters={activeFilters}
        defaultOpenedMenuIds={[1, 3, 10, 11]}
        deleteButtonLabel="Remove all"
        filterButtonLabel="Filtrer"
        menus={menuWithoutContent}
        title="Active filters"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
