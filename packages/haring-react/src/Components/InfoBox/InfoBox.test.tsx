import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { InfoBox } from './InfoBox';

describe('InfoBox', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<InfoBox />);
    expect(container).toMatchSnapshot();
  });
});
