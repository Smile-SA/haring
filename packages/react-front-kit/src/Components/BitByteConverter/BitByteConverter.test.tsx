import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';

import { BitByteConverter } from './BitByteConverter';

describe('BitByteConverter', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <BitByteConverter base={1000}>12121212</BitByteConverter>,
    );
    expect(container).toMatchSnapshot();
  });
});
