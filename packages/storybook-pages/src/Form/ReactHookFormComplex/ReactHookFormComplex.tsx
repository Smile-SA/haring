import type { IStep1Fields } from './Steps/Step1';
import type { IStep2Fields } from './Steps/Step2';
import type { ReactElement } from 'react';
import type {
  FieldErrors,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';

import { Flex } from '@mantine/core';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { withExceptionCapturing } from '../utilities/react-hook-form-utilities';

import classes from './ReactHookFormComplex.module.css';
import { Step1 } from './Steps/Step1';
import { Step2 } from './Steps/Step2';
import { Step3 } from './Steps/Step3';

export interface IFields {
  address: string;
  email: string;
  fullName: string;
  termsOfService: boolean;
}

export interface IReactHookFormProps {
  onFormErrors: (errors: FieldErrors<IFields>) => void;
  onFormSubmit: (data: Partial<IFields>) => void;
}

type IStepNumber = 1 | 2 | 3;

export function ReactHookFormComplex(props: IReactHookFormProps): ReactElement {
  const { onFormErrors, onFormSubmit } = props;
  const [currentStep, setCurrentStep] = useState<IStepNumber>(1);

  const methods = useForm<IFields>({
    defaultValues: {
      address: '',
      email: '',
      fullName: '',
      termsOfService: false,
    },
  });
  const { setValue, getValues, handleSubmit } = methods;

  const onStepErrors = (errors: FieldErrors): void => onFormErrors(errors);
  const onValidSubmit: SubmitHandler<IFields> = (data) => onFormSubmit(data);
  const onInvalidSubmit: SubmitErrorHandler<IFields> = (errors) =>
    onFormErrors(errors);

  function transformStep1(data: IStep1Fields): void {
    setValue(
      'fullName',
      `${data.firstName.toLowerCase()} ${data.familyName.toLowerCase()}`,
    );
    setValue(
      'address',
      `${data.streetNumber} ${data.streetName.toLowerCase()}, ${data.city} ${
        data.postalCode
      }`,
    );
    setCurrentStep(2);
  }

  function transformStep2(data: IStep2Fields): void {
    setValue('email', data.email);
    setValue('termsOfService', data.termsOfService);
    setCurrentStep(3);
  }

  return (
    <>
      <Flex align="stretch" direction="column">
        <p className={classes.title}>Multi-step Form Example</p>
        <FormProvider {...methods}>
          {Boolean(currentStep === 1) && (
            <Step1 onFormErrors={onStepErrors} onFormSubmit={transformStep1} />
          )}
          {Boolean(currentStep === 2) && (
            <Step2 onFormErrors={onStepErrors} onFormSubmit={transformStep2} />
          )}
          {Boolean(currentStep === 3) && (
            <Step3
              onComplete={withExceptionCapturing(
                handleSubmit(onValidSubmit, onInvalidSubmit),
              )}
            />
          )}
        </FormProvider>
      </Flex>
      <hr />
      <div>
        Form State: <pre>{JSON.stringify(getValues(), undefined, 2)}</pre>
      </div>
    </>
  );
}
