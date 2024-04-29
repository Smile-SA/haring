import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { childrenExampleMock } from '../SummaryBox/SummaryBox.mock';

import { CardList } from './CardList';

describe('CardList', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <CardList>
        {[
          childrenExampleMock(1),
          childrenExampleMock(2),
          childrenExampleMock(3),
          childrenExampleMock(4),
        ]}
      </CardList>,
    );
    expect(container).toMatchSnapshot();
  });
});
