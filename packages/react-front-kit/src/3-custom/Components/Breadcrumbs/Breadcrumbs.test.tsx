import { renderWithProviders } from '../../../utils/tests';

// eslint-disable-next-line import/named
import { Breadcrumbs } from './Breadcrumbs';

describe('Breadcrumbs', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <Breadcrumbs
        // eslint-disable-next-line react/no-children-prop
        children={undefined}
        separator={
          <svg
            fill="none"
            height="14"
            viewBox="0 0 14 14"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 10.5L8.75 7L5.25 3.5"
              stroke="#0B7285"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
      />
    );
    expect(container).toMatchSnapshot();
  });
});
