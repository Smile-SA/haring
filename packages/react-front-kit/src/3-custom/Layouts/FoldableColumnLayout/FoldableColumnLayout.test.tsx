import { renderWithProviders } from '../../../utils/tests';

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
