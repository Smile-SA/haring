import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { HeaderMobile } from './HeaderMobile';

describe('HeaderMobile', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <HeaderMobile searchInputProps={{ id: 'test' }}>
        <a href="#">Espace documentaire</a>
        <a href="#">Espace workflow</a>
        <a href="#">Archives</a>
      </HeaderMobile>,
    );
    expect(container).toMatchSnapshot();
  });
});
