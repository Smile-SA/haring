import type { ReactElement } from 'react';

export function CommonFormErrorText(props: { message: string }): ReactElement {
  const { message } = props;
  return (
    <em role="alert" style={{ color: 'red' }}>
      Error: {message}
    </em>
  );
}
