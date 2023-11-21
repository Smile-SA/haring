import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

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
    const { container } = renderWithProviders(
      <Table
        columns={[
          {
            accessorKey: 'id',
            header: 'id',
          },
          {
            accessorKey: 'format',
            header: 'Format',
          },
          {
            accessorKey: 'title',
            header: 'Titre',
          },
          {
            accessorKey: 'creator',
            header: 'Créateur',
          },
          {
            accessorKey: 'date',
            header: 'Date publication',
          },
        ]}
        data={[
          {
            creator: 'Valentin Perello',
            date: '20/05/2022',
            format: 'SVG',
            id: 1,
            title: 'Doc test',
          },
          {
            creator: 'Valentin Perello',
            date: '20/05/2022',
            format: 'PDF',
            id: 2,
            title: 'Doc test',
          },
          {
            creator: 'Valentin Perello',
            date: '20/05/2022',
            format: 'PDF',
            id: 3,
            title: 'Doc test',
          },
          {
            creator: 'Valentin Perello',
            date: '20/05/2022',
            format: 'PDF',
            id: 4,
            title: 'Doc test',
          },
          {
            creator: 'Valentin Perello',
            date: '20/05/2022',
            format: 'PDF',
            id: 5,
            title: 'Doc test',
          },
        ]}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
