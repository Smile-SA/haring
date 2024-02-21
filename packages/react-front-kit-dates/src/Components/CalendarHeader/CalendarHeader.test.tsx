import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { CalendarHeader } from './CalendarHeader';

describe('CalendarHeader', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <CalendarHeader label="August 2023" />,
    );
    expect(container).toMatchSnapshot();
  });
});
