import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { FiltersBar } from './FiltersBar';
import { activeFilters } from './FitlersBar.mock';
import { menuWithoutContent } from './SidebarFilterMenu/SidebarFilterMenu.mock';

describe('FiltersBar', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <FiltersBar
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
