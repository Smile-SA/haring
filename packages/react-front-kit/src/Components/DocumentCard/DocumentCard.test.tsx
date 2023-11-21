import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { DocumentCard } from './DocumentCard';

describe('DocumentCard', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <DocumentCard
        author="Aline"
        date="Published on December 24, 2023"
        iconType="PDF"
        path="(Customer > 567890456 > Invoices)"
        title="Random_File.PDF"
      >
        children
      </DocumentCard>,
    );
    expect(container).toMatchSnapshot();
  });
});
