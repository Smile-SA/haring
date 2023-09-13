import { within } from '@testing-library/react';

import { renderWithProviders } from '../../../utils/tests';

import { Pagination } from './Pagination';

describe('Pagination', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });

  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <Pagination
        page={2}
        rowsPerPage={15}
        rowsPerPageLabel="Number of results per page"
        rowsPerPageOptions={[
          { label: 'Display 1 result', value: 1 },
          { label: 'Display 5 results', value: 5 },
          { label: 'Display 10 results', value: 10 },
          { label: 'Display 15 results', value: 15 },
        ]}
        totalPages={10}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders with minimal props', () => {
    const { container } = renderWithProviders(
      <Pagination page={2} rowsPerPage={15} totalPages={10} />,
    );
    const canvas = within(container);
    expect(canvas.queryByTestId('pagination')).toBeVisible();
    expect(canvas.queryByTestId('pagination-rowsPerPage')).toBeNull();
    expect(canvas.queryByTestId('pagination-page')).toBeVisible();
  });

  it('renders with full props', () => {
    const { container } = renderWithProviders(
      <Pagination
        page={2}
        rowsPerPage={15}
        rowsPerPageLabel="Number of results per page"
        rowsPerPageOptions={[
          { value: 1 },
          { value: 5 },
          { value: 10 },
          { value: 15 },
        ]}
        totalPages={10}
      />,
    );
    const canvas = within(container);
    expect(canvas.queryByTestId('pagination')).toBeVisible();
    expect(canvas.queryByTestId('pagination-rowsPerPage')).toBeVisible();
    expect(canvas.queryByTestId('pagination-page')).toBeVisible();
  });
});
