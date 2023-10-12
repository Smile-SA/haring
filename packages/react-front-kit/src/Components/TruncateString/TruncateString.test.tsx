import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';

import { TruncateString } from './TruncateString';

describe('TruncateString', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <div style={{ width: '200px' }}>
        <h1>
          <TruncateString>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </TruncateString>
        </h1>
        ,
      </div>,
    );
    expect(container).toMatchSnapshot();
  });
});
