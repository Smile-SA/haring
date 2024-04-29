import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { ButtonListOrDropdown } from './ButtonListOrDropdown';
import { items } from './ButtonListOrDropdown.mock';

describe('ButtonListOrDropdown', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <ButtonListOrDropdown defaultCurrent="FR" items={items} />,
    );
    expect(container).toMatchSnapshot();
  });
});
