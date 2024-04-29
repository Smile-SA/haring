import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { Thumbnail } from './Thumbnail';

describe('Thumbnail', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<Thumbnail id="test" />);
    expect(container).toMatchSnapshot();
  });
});
