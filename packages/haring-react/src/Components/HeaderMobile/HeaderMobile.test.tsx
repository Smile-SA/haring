import { AppShell } from '@mantine/core';
import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { HeaderMobile } from './HeaderMobile';

describe('HeaderMobile', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <AppShell>
        <HeaderMobile searchInputProps={{ id: 'test' }}>
          <a href="#">Espace documentaire</a>
          <a href="#">Espace workflow</a>
          <a href="#">Archives</a>
        </HeaderMobile>
      </AppShell>,
    );
    expect(container).toMatchSnapshot();
  });
});
