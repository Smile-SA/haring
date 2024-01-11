import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { FilterList } from './FilterList';
import { filtersMock } from './FilterList.mock';

describe('FilterList', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <FilterList filters={filtersMock} />,
    );
    expect(container).toMatchSnapshot();
  });
});
