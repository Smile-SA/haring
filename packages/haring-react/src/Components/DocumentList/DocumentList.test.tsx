import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { actionRowOverflowActionsMock } from '../ActionList/ActionList.mock';

import { DocumentList } from './DocumentList';
import { documentsMock } from './DocumentList.mock';

describe('DocumentList', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <DocumentList
        actions={actionRowOverflowActionsMock}
        documents={documentsMock}
        selectedDocuments={[documentsMock[1]]}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
