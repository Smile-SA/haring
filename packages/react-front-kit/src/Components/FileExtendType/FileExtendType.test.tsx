import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';

import { FileExtendType } from './FileExtendType';

describe('FileExtendType', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <FileExtendType color="dark" size={45} type="PDF" />,
    );
    expect(container).toMatchSnapshot();
  });
});
