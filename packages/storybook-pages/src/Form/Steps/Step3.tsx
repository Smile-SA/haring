import type { ReactElement } from 'react';

import { Button, Card } from '@mantine/core';

interface IStep3Props {
  onComplete: () => void;
}

export function Step3(props: IStep3Props): ReactElement {
  const { onComplete } = props;
  return (
    <Card bg="green.2" p={20} radius={10}>
      <p>Step 3</p>
      {/* TODO: show summary that looks like the final transformed form data */}
      <Button onClick={onComplete}>Complete</Button>
    </Card>
  );
}
