import { Button } from '@mantine/core';

import { renderWithProviders } from '../../../utils/tests';

import { TableTooltip } from './TableTooltip';

describe('TableTooltip', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <TableTooltip element={<Button>test</Button>} text="test" />,
    );
    expect(container).toMatchSnapshot();
  });
});
