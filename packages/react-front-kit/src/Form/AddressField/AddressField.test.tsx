import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { AddressField } from './AddressField';

describe('AddressField', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <AddressField minValueLength={0} />,
    );
    expect(container).toMatchSnapshot();
  });
});
