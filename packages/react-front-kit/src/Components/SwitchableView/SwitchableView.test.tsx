import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { SwitchableView } from './SwitchableView';
import { views } from './SwitchableView.mock';

describe('SwitchableView', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<SwitchableView views={views} />);
    expect(container).toMatchSnapshot();
  });
});
