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
import { useForm } from 'react-hook-form';

import classes from './ReactHookFormComplex.module.css';
import { Step1 } from './Steps/Step1';
import { Step2 } from './Steps/Step2';
import { Step3 } from './Steps/Step3';
import { withExceptionCapturing } from './react-hook-form-utilities';

interface IFields {
  step1: IStep1Fields;
  step2: IStep2Fields;
}

export interface IReactHookFormProps {
  onFormErrors: (errors: FieldErrors<IFields>) => void;
  onFormSubmit: (data: Partial<IFields>) => void;
}

type IStepNumber = 1 | 2 | 3;

export function ReactHookFormComplex(props: IReactHookFormProps): ReactElement {
  const { onFormErrors, onFormSubmit } = props;
  const [currentStep, setCurrentStep] = useState<IStepNumber>(1);

  const { setValue, getValues, handleSubmit } = useForm<IFields>({
    defaultValues: {
      step1: {},
      step2: {},
    },
  });

  const onValidSubmit: SubmitHandler<IFields> = (data) => onFormSubmit(data);
  const onInvalidSubmit: SubmitErrorHandler<IFields> = (errors) =>
    onFormErrors(errors);

  // TODO: IFields should be the final transformed object rather than containing other Fields

  return (
    <>
      <Flex align="stretch" direction="column">
        <p className={classes.title}>Multi-step Form Example</p>
        {Boolean(currentStep === 1) && (
          <Step1
            onFormErrors={(errors) => {
              onFormErrors(errors);
            }}
            onFormSubmit={(data) => {
              setValue('step1', data);
              setCurrentStep(2);
            }}
          />
        )}
        {Boolean(currentStep === 2) && (
          <Step2
            onFormErrors={(errors) => {
              onFormErrors(errors);
            }}
            onFormSubmit={(data) => {
              setValue('step2', data);
              setCurrentStep(3);
            }}
          />
        )}
        {Boolean(currentStep === 3) && (
          <Step3
            onComplete={withExceptionCapturing(
              handleSubmit(onValidSubmit, onInvalidSubmit),
            )}
          />
        )}
      </Flex>
      <hr />
      <div>
        Form State: <pre>{JSON.stringify(getValues(), undefined, 2)}</pre>
      </div>
    </>
  );
}
