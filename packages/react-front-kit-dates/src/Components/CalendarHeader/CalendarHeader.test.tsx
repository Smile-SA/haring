import { renderWithProviders } from '@smile/haring-react-shared/test-utils';

import { CalendarHeader } from './CalendarHeader';

describe('CalendarHeader', () => {
  beforeEach(() => {
    // Prevent mantine random ID
    Math.random = () => 0.42;
  });
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <CalendarHeader
        date={new Date(0, 0, 0)}
        label="August 2023"
        level="month"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
