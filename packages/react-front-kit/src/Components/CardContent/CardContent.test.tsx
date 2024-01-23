import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { CardContent } from './CardContent';
import { defaultCardContentMock } from './CardContent.mock';

describe('CardContent', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <CardContent id="summary-card" {...defaultCardContentMock} />,
    );
    expect(container).toMatchSnapshot();
  });
});
