import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { Preview } from './Preview';

describe('Preview', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <Preview defaultMimeType="image/png" url="./image.png" />,
    );
    expect(container).toMatchSnapshot();
  });
});
