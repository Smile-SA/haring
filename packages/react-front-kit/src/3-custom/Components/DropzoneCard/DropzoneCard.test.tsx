import { renderWithProviders } from '../../../utils/tests';

import { DropzoneCard } from './DropzoneCard';

describe('DropzoneCard', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <DropzoneCard dropZone={false} />,
    );
    expect(container).toMatchSnapshot();
  });
});
