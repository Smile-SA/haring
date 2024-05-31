import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { SearchableList } from './SearchableList';
import { checkboxesMock } from './SearchableList.mock';

describe('SearchableList', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <SearchableList
        checkboxes={checkboxesMock}
        placeholder="Test"
        submitButtonLabel="Test"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
