import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { FilterCheckboxList } from './FilterCheckboxList';
import { filters } from './FilterCheckboxList.mock';

describe('FilterCheckboxList', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <FilterCheckboxList
        buttonLabel="Test"
        filters={filters}
        placeholder="Test"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
