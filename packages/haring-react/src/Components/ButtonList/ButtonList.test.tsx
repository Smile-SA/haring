import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { ButtonList } from './ButtonList';
import { items } from './ButtonList.mock';

describe('ButtonList', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <ButtonList defaultCurrent="FR" items={items} />,
    );
    expect(container).toMatchSnapshot();
  });
});
