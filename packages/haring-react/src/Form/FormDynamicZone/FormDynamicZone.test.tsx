import type { IExampleBlock } from './FormDynamicZone.mock';

import { renderWithProviders } from '@smile/haring-react-shared/test-utils';
import { action } from '@storybook/addon-actions';

import { FormDynamicZone } from './FormDynamicZone';
import { availableBlocksMock, blocksMock } from './FormDynamicZone.mock';

describe('FormDynamicZone', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <FormDynamicZone<IExampleBlock>
        availableBlocks={availableBlocksMock}
        blocksArray={blocksMock}
        onAppendUpdate={action('append')}
        onRemoveUpdate={action('remove')}
        onSwapUpdate={action('swap')}
        onToggleUpdate={action('toggle')}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
