import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { FileIcon } from './FileIcon';

describe('FileIcon', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <FileIcon color="dark" size={45} type="PDF" />,
    );
    expect(container).toMatchSnapshot();
  });
});
