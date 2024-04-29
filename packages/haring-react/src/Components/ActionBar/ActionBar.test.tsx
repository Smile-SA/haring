import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { ActionBar } from './ActionBar';
import { actionBarMock } from './ActionBar.mock';

describe('ActionBar', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<ActionBar {...actionBarMock} />);
    expect(container).toMatchSnapshot();
  });
});
