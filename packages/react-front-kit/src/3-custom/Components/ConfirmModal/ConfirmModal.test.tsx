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
        // eslint-disable-next-line no-console
        onClose={() => console.log('yolo')}
        onConfirm={
          // eslint-disable-next-line no-console
          () => console.log('onConfirm')
        }
        opened={false}
        title="Supprimer ?"
      >
        Voulez vous supprimer cette élément ?
      </ConfirmModal>,
    );
    expect(container).toMatchSnapshot();
  });
});
