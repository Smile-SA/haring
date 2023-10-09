import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';

import { Dropzone } from './Dropzone';

describe('Dropzone', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <Dropzone
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, no-console
        onDrop={(file) => console.log(`accept ${file}`)}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
