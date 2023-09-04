import { renderWithProviders } from '../../../utils/tests';

import { Table } from './Table';

describe('Table', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<Table />);
    expect(container).toMatchSnapshot();
  });
});
