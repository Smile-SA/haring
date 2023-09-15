import { renderWithProviders } from '../../../utils/tests';

import { Table } from './Table';

jest.mock('@mantine/hooks', () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const original = jest.requireActual('@mantine/hooks');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
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
