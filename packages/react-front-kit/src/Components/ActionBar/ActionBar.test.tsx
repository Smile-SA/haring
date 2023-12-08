import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { ActionBar } from './ActionBar';
import { actionBarMock } from './ActionBar.mock';

describe('ActionBar', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<ActionBar {...actionBarMock} />);
    expect(container).toMatchSnapshot();
  });
});
