import type { IBaseBlock } from '@smile/haring-react/src';
import type { ReactElement } from 'react';

export interface IExampleBlock extends IBaseBlock {
  value?: string;
}

export function CommonFormErrorText(props: { message: string }): ReactElement {
  const { message } = props;
  return (
    <em role="alert" style={{ color: 'red' }}>
      Error: {message}
    </em>
  );
}
