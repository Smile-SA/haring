import type { IFields } from '../ReactHookFormComplex';
import type { ReactElement } from 'react';

import { Button, Card, Text } from '@mantine/core';
import { useFormContext } from 'react-hook-form';

interface IStep3Props {
  onComplete: () => void;
}

export function Step3(props: IStep3Props): ReactElement {
  const { onComplete } = props;
  const { getValues } = useFormContext<IFields>();

  return (
    <Card bg="green.2" p={20} radius={10}>
      <p>Step 3</p>
      <Text size="lg">Summary</Text>
      <Text size="md">Name: {getValues().fullName}</Text>
      <Text size="md">Address: {getValues().address}</Text>
      <Text size="md">Email: {getValues().email}</Text>
      <Text size="md">
        Agreed to terms of service: {getValues().termsOfService}
      </Text>
      <br />
      <Text size="lg">
        Thank you! Click on the button below to send the form.
      </Text>
      <br />
      {/* TODO: show summary that looks like the final transformed form data */}
      <Button onClick={onComplete}>Complete</Button>
    </Card>
  );
}
