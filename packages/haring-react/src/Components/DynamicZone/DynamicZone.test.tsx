import type { IExampleBlock } from './DynamicZone.mock';

import { renderWithProviders } from '@smile/haring-react-shared/test-utils';
import { action } from '@storybook/addon-actions';

import { DynamicZone } from './DynamicZone';
import {
  dynamicZoneAvailableBlocksMock,
  dynamicZoneBlocksMock,
} from './DynamicZone.mock';

describe('DynamicZone', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(
      <DynamicZone<IExampleBlock>
        availableBlocks={dynamicZoneAvailableBlocksMock}
        blocksArray={dynamicZoneBlocksMock}
        onAppendUpdate={action('append')}
        onRemoveUpdate={action('remove')}
        onSwapUpdate={action('swap')}
        onToggleUpdate={action('toggle')}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
