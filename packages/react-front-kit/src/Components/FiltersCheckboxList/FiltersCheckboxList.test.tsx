import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { FiltersCheckboxList } from './FiltersCheckboxList';

describe('FiltersCheckboxList', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <FiltersCheckboxList
        buttonLabel="Test"
        filters={[]}
        placeholder="Test"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
