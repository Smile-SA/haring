import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { actionRowOverflowActionsMock } from '../ActionRowOverflow/ActionRowOverflow.mock';

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
