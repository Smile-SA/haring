import { renderWithProviders } from '../../test-utils';

import { FileIcon } from './FileIcon';

describe('FileIcon', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <FileIcon color="dark" size={45} type="pdf" />,
    );
    expect(container).toMatchSnapshot();
  });
});
