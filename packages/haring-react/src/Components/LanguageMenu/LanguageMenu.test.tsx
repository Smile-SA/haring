import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { LanguageMenu } from './LanguageMenu';
import { languages } from './LanguageMenu.mock';

describe('LanguageMenu', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <LanguageMenu defaultCurrent="FR" languages={languages} />,
    );
    expect(container).toMatchSnapshot();
  });
});
