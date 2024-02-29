import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { EventList } from './EventList';
import { eventMock } from './EventList.mock';

describe('EventList', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <EventList
        color={eventMock.color}
        description={eventMock.description}
        details={eventMock.details}
        title={eventMock.title}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
