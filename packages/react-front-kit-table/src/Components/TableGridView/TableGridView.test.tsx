import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { TableGridView } from './TableGridView';
import { tableGridViewProps } from './TableGridView.mock';

describe('TableGridView', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <TableGridView {...tableGridViewProps} />,
    );
    expect(container).toMatchSnapshot();
  });
});
