import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { FiltersBar } from './FiltersBar';
import { getMenu } from './SidebarFilterMenu/SidebarFilterMenu.mock';

describe('Filters', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <FiltersBar
        activeFilters={[
          {
            categoryId: [1],
            id: 1,
            label: 'Dupont',
            value: 'DUPONT',
          },
          {
            categoryId: [1],
            id: 2,
            label: 'Martin',
            value: 'MARTIN',
          },
          {
            categoryId: [3, 10],
            id: 3,
            label: 'Freelance',
            value: 'Freelance',
          },
          {
            categoryId: [3, 11],
            id: 4,
            label: 'CDI',
            value: 'CDI',
          },
        ]}
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
