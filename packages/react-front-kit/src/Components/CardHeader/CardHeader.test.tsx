import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { CardHeader } from './CardHeader';
import { icon, title } from './CardHeader.mock';

describe('CardHeader', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <CardHeader leftSection={icon}>{title}</CardHeader>,
    );
    expect(container).toMatchSnapshot();
  });
});
