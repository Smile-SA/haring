import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { FiltersCheckboxList } from './FiltersCheckboxList';
import { filters } from './FiltersCheckboxList.mock';

describe('FiltersCheckboxList', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <FiltersCheckboxList
        buttonLabel="Test"
        filters={filters}
        placeholder="Test"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
