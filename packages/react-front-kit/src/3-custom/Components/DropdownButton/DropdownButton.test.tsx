import { renderWithProviders } from '../../../utils/tests';

import { DropdownButton } from './DropdownButton';

describe('DropdownButton', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<DropdownButton label="label" />);
    expect(container).toMatchSnapshot();
  });
});
