import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { ActionRowOverflow } from './ActionRowOverflow';
import { actionRowOverflowMock } from './ActionRowOverflow.mock';

describe('ActionRowOverflow', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <ActionRowOverflow {...actionRowOverflowMock} />,
    );
    expect(container).toMatchSnapshot();
  });
});
