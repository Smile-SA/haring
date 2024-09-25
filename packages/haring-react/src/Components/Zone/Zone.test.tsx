import type { IBaseBlockCardOptions } from '../../types';
import type { ReactElement } from 'react';

import { renderWithProviders } from '@smile/haring-react-shared/test-utils';
import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';

import { Zone } from './Zone';
import { zoneBlocksMock, zoneButtonsMock } from './Zone.mock';

describe('Zone', () => {
  it('matches snapshot', () => {
    const onRender = (
      _b: IBaseBlockCardOptions,
      index: number,
    ): ReactElement => <input key={index} />;
    const { container } = renderWithProviders(
      <Zone
        blockOptions={zoneButtonsMock}
        blocks={zoneBlocksMock}
        onAppendBlock={action('onAppendBlock, id')}
        onRenderBlockContent={onRender}
        onToggleBlock={action('onToggleBlock')}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
