import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';

import { DocumentCard } from './DocumentCard';

describe('DocumentCard', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <DocumentCard
        author={<>Valentin</>}
        date={<>24/12/1996</>}
        iconType="PDF"
        image="./thing.jpg"
        path={
          <>
            Customer {'>'} 567890456 {'>'} Invoices
          </>
        }
        title={<h1>A_thing.PDF</h1>}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
