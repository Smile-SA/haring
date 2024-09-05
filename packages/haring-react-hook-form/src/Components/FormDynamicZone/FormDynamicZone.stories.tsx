import type { IFormDynamicZoneProps } from './FormDynamicZone';
import type { Meta, StoryObj } from '@storybook/react';
import type { ReactElement } from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import { FormDynamicZone as Cmp } from './FormDynamicZone';
import { dynamicBlocksMock } from './FormDynamicZone.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Form/FormDynamicZone',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

function render() {
  return function Render(props: IFormDynamicZoneProps): ReactElement {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <div style={{ margin: '0 200px' }}>
          <Cmp {...props} />
        </div>
      </FormProvider>
    );
  };
}

export const FormDynamicZone: IStory = {
  args: { dynamicBlocks: dynamicBlocksMock, dynamicZoneName: 'dynTest' },
  render: render(),
};
