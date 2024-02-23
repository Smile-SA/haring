import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { ItemList } from './ItemList';
import { itemsMock } from './itemList.mock';

describe('ItemList', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<ItemList items={itemsMock} />);
    expect(container).toMatchSnapshot();
  });
});
