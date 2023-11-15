import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { FoldableColumnLayout } from './FoldableColumnLayout';

describe('FoldableColumnLayout', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <FoldableColumnLayout sidebarContent={<span>sidebar content</span>}>
        <span>main content</span>
      </FoldableColumnLayout>,
    );
    expect(container).toMatchSnapshot();
  });
});
