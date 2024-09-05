import type { IBaseBlock } from '../../types';
import type { ReactElement } from 'react';

import { renderWithProviders } from '@smile/haring-react-shared/test-utils';
import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';

import { DynamicZone } from './DynamicZone';
import { dynamicZoneBlocks, dynamicZoneButtons } from './DynamicZone.mock';

describe('DynamicZone', () => {
  it('matches snapshot', () => {
    const onRender = (_b: IBaseBlock, index: number): ReactElement => (
      <input key={index} />
    );
    const { container } = renderWithProviders(
      <DynamicZone
        blockOptions={dynamicZoneButtons}
        blocks={dynamicZoneBlocks}
        onAppendBlock={action('onAppendBlock, id')}
        onRenderBlockContent={onRender}
        onToggleBlock={action('onToggleBlock')}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
