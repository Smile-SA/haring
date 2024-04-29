import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { Preview } from './Preview';

describe('Preview', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <Preview defaultMimeType="image/png" url="./image.png" />,
    );
    expect(container).toMatchSnapshot();
  });
});
