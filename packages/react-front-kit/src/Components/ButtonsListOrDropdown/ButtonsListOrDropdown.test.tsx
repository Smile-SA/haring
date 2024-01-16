import { renderWithProviders } from '@smile/react-front-kit-shared/test-utils';

import { ButtonsListOrDropdown } from './ButtonsListOrDropdown';

describe('ButtonsListOrDropdown', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <ButtonsListOrDropdown
        defaultCurrent=""
        items={[]}
        onAction={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
