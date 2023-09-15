import { renderWithProviders } from '../../../utils/tests';

import { Table } from './Table';

jest.mock('@mantine/hooks', () => {
  const original =
    jest.requireActual<typeof import('@mantine/hooks')>('@mantine/hooks');
  return {
    ...original,
    useId: jest.fn(),
  };
});

describe('Table', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<Table />);
    expect(container).toMatchSnapshot();
  });
});
