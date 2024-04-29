import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { SearchableCheckboxList } from './SearchableCheckboxList';
import { checkboxesMock } from './SearchableCheckboxList.mock';

describe('SearchableCheckboxList', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <SearchableCheckboxList
        buttonLabel="Test"
        checkboxes={checkboxesMock}
        placeholder="Test"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
