import { renderWithProviders } from '../../../utils/tests';

import { ConfirmModal } from './ConfirmModal';

describe('ConfirmModal', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <ConfirmModal
        cancelColor="gray"
        cancelLabel="Annuler"
        confirmColor="red"
        confirmLabel="Supprimer"
        onCancel={
          // eslint-disable-next-line no-console
          () => console.log('onCancel')
        }
        onConfirm={
          // eslint-disable-next-line no-console
          () => console.log('onConfirm')
        }
        opened={false}
        title="Supprimer ?"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
