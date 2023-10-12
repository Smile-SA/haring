import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';

import { TruncateStringWithEllipsis } from './TruncateStringWithEllipsis';

describe('TruncateStringWithEllipsis', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <div style={{ width: '200px' }}>
        <h1>
          <TruncateStringWithEllipsis>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </TruncateStringWithEllipsis>
        </h1>
        ,
      </div>,
    );
    expect(container).toMatchSnapshot();
  });
});
