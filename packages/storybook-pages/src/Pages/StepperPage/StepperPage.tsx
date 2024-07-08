/* eslint-disable @typescript-eslint/no-unsafe-call */
'use client';

import type { IAddressFieldsValues } from '@smile/haring-react/src/Form/AddressFields/AddressFields';
import type { IValue } from '@smile/haring-react/src/Form/FetchAutocompleteField/FetchAutocompleteField';
import type { ReactElement } from 'react';

import { Button, Flex, Group, Stepper } from '@mantine/core';
import { useForm } from '@mantine/form';
import {
  FoldableColumnLayout,
  FullNameFields,
  SidebarMenu,
} from '@smile/haring-react';

// import { AddressAutocompleteFields } from '@smile/haring-react/src/Form/AddressAutocompleteFields/AddressAutocompleteFields';
import { useEffect, useState } from 'react';

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

export async function getDataAddressGouvRequest(
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
  const [formData, setFormData] = useState({
    address: {
      city: '',
      country: '',
      number: '',
      postCode: '',
      street: '',
    },
    fullName: '',
  });

  const sidebarMenu = menuMock;

  const form = useForm({
    initialValues: formData,
  });

  const nextStep = (): void => {
    if (!form.validate().hasErrors) {
      setFormData(form.values);
      setActive((current) => (current < 3 ? current + 1 : current));
    }
  };

  const prevStep = (): void => {
    setFormData(form.values);
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  useEffect(() => {
    form.setValues(formData);
  }, [active, form, formData]);

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
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        address: newAddress,
      };
      return updatedData;
    });
    return newAddress;
  }

  return (
    <FoldableColumnLayout
      sidebarContent={
        <Flex direction="column">
          <SidebarMenu menu={sidebarMenu} />
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
              setFormData((prevData) => ({
                ...prevData,
                address: {
                  city: values.city ?? '',
                  country: values.country ?? form.values.address.country,
                  number: values.number ?? '',
                  postCode: values.postCode ?? '',
                  street: values.street ?? '',
                },
              }));
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
