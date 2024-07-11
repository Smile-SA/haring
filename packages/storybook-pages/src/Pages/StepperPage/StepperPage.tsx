'use client';
import type { IAddressFieldsValues } from '@smile/haring-react/src/Form/AddressFields/AddressFields';
import type { IValue } from '@smile/haring-react/src/Form/FetchAutocompleteField/FetchAutocompleteField';
import type { ReactElement } from 'react';

import { Button, Flex, Group, Stepper } from '@mantine/core';
import { useForm } from '@mantine/form';
import {
  AddressAutocompleteFields,
  FoldableColumnLayout,
  FullNameFields,
  SidebarMenu,
} from '@smile/haring-react';
import { useState } from 'react';

import { menuMock } from '../BrowsingPage/BrowsingPage.mock';

import { texts } from './StepperPage.mock';

export interface IAddressGouvData {
  properties: {
    city?: string;
    housenumber?: string;
    label: string;
    postcode?: string;
    street?: string;
  };
}

async function getDataAddressGouvRequest(
  value: string,
): Promise<IValue<IAddressGouvData>[]> {
  const response = await fetch(
    `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(
      value,
    )}&autocomplete=1`,
  );
  const data: { features: IAddressGouvData[] } = await response.json();
  const result = data.features.map((element) => {
    return { label: element.properties.label, value: element };
  });

  return result;
}

export function StepperPage(): ReactElement {
  const [active, setActive] = useState(0);

  const form = useForm({
    initialValues: {
      address: {
        city: '',
        country: '',
        number: '',
        postCode: '',
        street: '',
      },
      fullName: {
        firstName: '',
        lastName: '',
      },
    },
  });

  const nextStep = (): void => {
    if (!form.validate().hasErrors) {
      setActive((current) => (current < 3 ? current + 1 : current));
    }
  };

  const prevStep = (): void => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  function onOptionSubmitMock(
    value: IValue<IAddressGouvData>,
  ): IAddressFieldsValues {
    const address = value.value.properties;
    const newAddress = {
      city: address.city ?? '',
      country: 'France',
      number: address.housenumber ?? '',
      postCode: address.postcode ?? '',
      street: address.street ?? '',
    };
    form.setFieldValue('address', newAddress);
    return newAddress;
  }

  return (
    <FoldableColumnLayout
      sidebarContent={
        <Flex direction="column">
          <SidebarMenu menu={menuMock} />
        </Flex>
      }
    >
      <Stepper active={active}>
        <Stepper.Step description="Create an account" label="First step">
          {texts.steps.step1}
          <FullNameFields mt="md" {...form.getInputProps('fullName')} />
        </Stepper.Step>
        <Stepper.Step description="Verify email" label="Second step">
          {texts.steps.step2}
          <AddressAutocompleteFields
            addressFieldsProps={form.values.address}
            mt="md"
            onFetchData={getDataAddressGouvRequest}
            onFieldsValuesChange={(values) => {
              form.setFieldValue('address', {
                city: values.city ?? '',
                country: values.country ?? form.values.address.country,
                number: values.number ?? '',
                postCode: values.postCode ?? '',
                street: values.street ?? '',
              });
            }}
            onOptionSubmit={onOptionSubmitMock}
          />
        </Stepper.Step>
        <Stepper.Completed>{texts.steps.step3}</Stepper.Completed>
      </Stepper>

      <Group mt="xl">
        {active !== 0 && (
          <Button onClick={prevStep} variant="default">
            Back
          </Button>
        )}
        {active !== 2 && <Button onClick={nextStep}>Next step</Button>}
      </Group>
    </FoldableColumnLayout>
  );
}
