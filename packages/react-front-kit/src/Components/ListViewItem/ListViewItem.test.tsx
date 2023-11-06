import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';

import { ListViewItem } from './ListViewItem';

describe('ListViewItem', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <ListViewItem
        author="Valentin"
        date="24/12/1996"
        iconType="PDF"
        image="./thing.jpg"
        path="Clients > 567890456 > Factures"
        title={<h1>A_thing.PDF</h1>}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
