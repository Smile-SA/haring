import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { SummaryBox } from './SummaryBox';
import { defaultSummaryBoxMock } from './SummaryBox.mock';

describe('SummaryBox', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <SummaryBox id="summary-card" {...defaultSummaryBoxMock} />,
    );
    expect(container).toMatchSnapshot();
  });
});
