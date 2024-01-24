import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { MenuLanguages } from './MenuLanguages';
import { languages } from './MenuLanguages.mock';

describe('MenuLanguages', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <MenuLanguages defaultCurrent="FR" languages={languages} />,
    );
    expect(container).toMatchSnapshot();
  });
});
