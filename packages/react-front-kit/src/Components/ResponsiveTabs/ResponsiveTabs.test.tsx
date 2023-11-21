import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { ResponsiveTabs } from './ResponsiveTabs';
import { contents, tabs } from './ResponsiveTabs.mock';

describe('ResponsiveTabs', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <ResponsiveTabs id="responsive-tabs" tabs={tabs}>
        {contents}
      </ResponsiveTabs>,
    );
    expect(container).toMatchSnapshot();
  });
});
