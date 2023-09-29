import { renderWithProviders } from '../../../utils/tests';

import { FileSheet } from './FileSheet';

describe('FileSheet', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<FileSheet dropZone={false} />);
    expect(container).toMatchSnapshot();
  });
});
