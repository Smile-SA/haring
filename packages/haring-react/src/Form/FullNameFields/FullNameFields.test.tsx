import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { FullNameFields } from './FullNameFields';

describe('FullNameFields', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<FullNameFields />);
    expect(container).toMatchSnapshot();
  });
});
