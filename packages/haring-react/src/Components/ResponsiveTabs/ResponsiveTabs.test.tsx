import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { ResponsiveTabs } from './ResponsiveTabs';
import { contentsMock, tabsMock } from './ResponsiveTabs.mock';

describe('ResponsiveTabs', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <ResponsiveTabs id="responsive-tabs" tabs={tabsMock}>
        {contentsMock}
      </ResponsiveTabs>,
    );
    expect(container).toMatchSnapshot();
  });
});
