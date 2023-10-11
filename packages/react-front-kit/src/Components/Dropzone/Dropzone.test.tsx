import { renderWithProviders } from '@smile/react-front-kit-shared/src/test-utils';

import { Dropzone } from './Dropzone';

describe('Dropzone', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <Dropzone
        files={[
          {
            lastModified: 1682342930770,
            name: 'CERFA.postman_collection.json',
            path: 'CERFA.postman_collection.json',
            size: 1579,
            type: 'application/json',
          },
          {
            lastModified: 1682342930770,
            name: 'CERFA.postman_collection.json',
            path: 'CERFA.postman_collection.json',
            size: 1579,
            type: 'application/json',
          },
          {
            lastModified: 1682342930770,
            name: 'CERFA.postman_collection.json',
            path: 'CERFA.postman_collection.json',
            size: 1579,
            type: 'application/json',
          },
          {
            lastModified: 1682342930770,
            name: 'CERFA.postman_collection.json',
            path: 'CERFA.postman_collection.json',
            size: 1579,
            type: 'application/json',
          },
        ]}
        // eslint-disable-next-line no-console
        onDrop={(file) => console.log(file)}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
