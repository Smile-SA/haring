import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { Breadcrumbs } from './Breadcrumbs';

describe('Breadcrumbs', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <Breadcrumbs>
        {[
          <a key={1} href="test">
            test
          </a>,
          <a key={2} href="test">
            test
          </a>,
        ]}
      </Breadcrumbs>,
    );
    expect(container).toMatchSnapshot();
  });
});
