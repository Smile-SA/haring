import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { SwitchableView } from './SwitchableView';
import { viewsMock } from './SwitchableView.mock';

describe('SwitchableView', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <SwitchableView views={viewsMock} />,
    );
    expect(container).toMatchSnapshot();
  });
});
