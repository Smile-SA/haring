import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { ActionList } from './ActionList';
import { ActionListMock } from './ActionList.mock';

describe('ActionList', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <ActionList {...ActionListMock} />,
    );
    expect(container).toMatchSnapshot();
  });
});
