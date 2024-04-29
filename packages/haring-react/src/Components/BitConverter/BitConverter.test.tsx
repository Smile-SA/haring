import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { BitConverter } from './BitConverter';

describe('BitConverter', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <BitConverter options={{ locale: 'fr' }} value={12121212} />,
    );
    expect(container).toMatchSnapshot();
  });
});
