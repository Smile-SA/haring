import { AppShell } from '@mantine/core';
import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { Header } from './Header';

describe('Header', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <AppShell>
        <Header hasResponsiveMode={false} searchInputProps={{ id: 'test' }}>
          <a href="#">Espace documentaire</a>
          <a href="#">Espace workflow</a>
          <a href="#">Archives</a>
        </Header>
      </AppShell>,
    );
    expect(container).toMatchSnapshot();
  });
});
