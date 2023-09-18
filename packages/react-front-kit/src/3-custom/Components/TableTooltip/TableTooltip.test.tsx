import { renderWithProviders } from '../../../utils/tests';

import { TableTooltip } from './TableTooltip';

describe('TableTooltip', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<TableTooltip />);
    expect(container).toMatchSnapshot();
  });
});
