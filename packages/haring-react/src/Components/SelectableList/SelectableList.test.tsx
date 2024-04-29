import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { SelectableList } from './SelectableList';
import { selectableListElementsMock } from './SelectableList.mock';

describe('SelectableList', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <SelectableList selectedIndexes={[1]}>
        {selectableListElementsMock}
      </SelectableList>,
    );
    expect(container).toMatchSnapshot();
  });
});
