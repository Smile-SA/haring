import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { ResponsiveTabs } from './ResponsiveTabs';
import { contentsMock, tabsMock } from './ResponsiveTabs.mock';

describe('ResponsiveTabs', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <ResponsiveTabs id="responsive-tabs" tabs={tabsMock}>
        {contentsMock}
      </ResponsiveTabs>,
    );
    expect(container).toMatchSnapshot();
  });
});
