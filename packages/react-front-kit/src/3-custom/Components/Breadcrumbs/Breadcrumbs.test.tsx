import { renderWithProviders } from '../../../utils/tests';

// eslint-disable-next-line import/named
import { Breadcrumbs } from './Breadcrumbs';

describe('Breadcrumbs', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <Breadcrumbs
        // eslint-disable-next-line react/no-children-prop
        children={[
          <a key={1} href="test">
            test
          </a>,
          <a key={2} href="test">
            test
          </a>,
        ]}
        separator="/"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
