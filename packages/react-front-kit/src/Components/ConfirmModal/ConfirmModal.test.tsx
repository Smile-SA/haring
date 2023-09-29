import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';
import { screen } from '@testing-library/react';

import { ConfirmModal } from './ConfirmModal';

jest.mock('@mantine/hooks', () => {
  const original =
    jest.requireActual<typeof import('@mantine/hooks')>('@mantine/hooks');
  return {
    ...original,
    useId: jest.fn(),
  };
});

describe('ConfirmModal', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <ConfirmModal
        cancelColor="gray"
        cancelLabel="Cancel"
        confirmColor="red"
        confirmLabel="Remove"
        // eslint-disable-next-line no-console
        onClose={() => console.log('onClose')}
        opened
        title="Remove ?"
      >
        Are you sure you want to delete this item?
      </ConfirmModal>,
    );
    expect(screen.getByRole('dialog')).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
