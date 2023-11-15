import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { Dropzone } from './Dropzone';

describe('Dropzone', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <Dropzone
        files={[
          {
            name: 'CERFA.postman_collection.json',
            size: 1579,
          },
          {
            name: 'CERFA.postman_collection.json',
            size: 1579,
          },
          {
            name: 'CERFA.postman_collection.json',
            size: 1579,
          },
          {
            name: 'CERFA.postman_collection.json',
            size: 1579,
          },
        ]}
        // eslint-disable-next-line no-console
        onDrop={(file) => console.log(file)}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
