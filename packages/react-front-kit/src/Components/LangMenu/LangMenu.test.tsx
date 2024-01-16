import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { LangMenu } from './LangMenu';

describe('LangMenu', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<LangMenu />);
    expect(container).toMatchSnapshot();
  });
});
