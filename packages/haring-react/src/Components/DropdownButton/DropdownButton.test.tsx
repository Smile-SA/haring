import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { DropdownButton } from './DropdownButton';

describe('DropdownButton', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<DropdownButton label="label" />);
    expect(container).toMatchSnapshot();
  });
});
