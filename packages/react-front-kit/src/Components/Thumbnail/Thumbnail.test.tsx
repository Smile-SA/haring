import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';

import { Thumbnail } from './Thumbnail';

describe('Thumbnail', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<Thumbnail />);
    expect(container).toMatchSnapshot();
  });
});
