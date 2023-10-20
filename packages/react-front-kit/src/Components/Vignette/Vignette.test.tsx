import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';

import { Vignette } from './Vignette';

describe('Vignette', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<Vignette />);
    expect(container).toMatchSnapshot();
  });
});
