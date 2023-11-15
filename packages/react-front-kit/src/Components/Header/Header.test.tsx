import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { Header } from './Header';

describe('Header', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <Header>
        <a href="#">Espace documentaire</a>
        <a href="#">Espace workflow</a>
        <a href="#">Archives</a>
      </Header>,
    );
    expect(container).toMatchSnapshot();
  });
});
