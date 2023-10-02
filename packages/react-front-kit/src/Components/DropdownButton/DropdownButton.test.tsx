import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';

import { DropdownButton } from './DropdownButton';

describe('DropdownButton', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<DropdownButton label="label" />);
    expect(container).toMatchSnapshot();
  });
});
