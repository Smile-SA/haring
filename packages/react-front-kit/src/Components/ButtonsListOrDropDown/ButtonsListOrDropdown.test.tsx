import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { ButtonsListOrDropdown } from './ButtonsListOrDropdown';
import { items } from './ButtonsListOrDropdown.mock';

describe('ButtonsListOrDropdown', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <ButtonsListOrDropdown defaultCurrent="FR" items={items} />,
    );
    expect(container).toMatchSnapshot();
  });
});
