import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { DocumentBox } from './DocumentBox';

describe('DocumentBox', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <DocumentBox
        author="Aline"
        date="Published on December 24, 2023"
        iconType="PDF"
        path="(Customer > 567890456 > Invoices)"
        title="Random_File.PDF"
      >
        children
      </DocumentBox>,
    );
    expect(container).toMatchSnapshot();
  });
});
