import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { FullNameFields } from './FullNameFields';

describe('FullNameFields', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<FullNameFields />);
    expect(container).toMatchSnapshot();
  });
});
