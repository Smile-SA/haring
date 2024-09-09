import type { ReactElement } from 'react';

import { renderWithProviders } from '@smile/haring-react-shared/test-utils';
import { action } from '@storybook/addon-actions';
import { FormProvider, useForm } from 'react-hook-form';

import { FormDynamicZone } from './FormDynamicZone';
import { dynamicBlocksMock } from './FormDynamicZone.mock';

describe('FormDynamicZone', () => {
  it('matches snapshot', () => {
    function TestWithProvider(): ReactElement {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <FormDynamicZone
            dynamicBlocks={dynamicBlocksMock}
            dynamicZoneName="dynamicZoneTest"
            onFormSubmit={action('results')}
          />
        </FormProvider>
      );
    }

    const { container } = renderWithProviders(<TestWithProvider />);
    expect(container).toMatchSnapshot();
  });
});
