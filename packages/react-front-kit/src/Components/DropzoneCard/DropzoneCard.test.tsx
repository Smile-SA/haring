import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';

import { DropzoneCard } from './DropzoneCard';

describe('DropzoneCard', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<DropzoneCard />);
    expect(container).toMatchSnapshot();
  });
});
