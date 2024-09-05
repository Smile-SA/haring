import type { ReactElement } from 'react';

import { renderWithProviders } from '@smile/haring-react-shared/test-utils';
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
          />
        </FormProvider>
      );
    }

    const { container } = renderWithProviders(<TestWithProvider />);
    expect(container).toMatchSnapshot();
  });
});
