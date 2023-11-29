import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { ThumbnailGrid } from './ThumbnailGrid';
import { thumbnailGridActionsMock, thumbnails } from './ThumbnailGrid.mock';

describe('ThumbnailGrid', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <ThumbnailGrid
        actions={thumbnailGridActionsMock}
        thumbnails={thumbnails}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
