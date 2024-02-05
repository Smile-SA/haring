import type { Meta, StoryObj } from '@storybook/react';

import {
  Autocomplete,
  Checkbox,
  Chip,
  ColorInput,
  FileInput,
  MultiSelect,
  NumberInput,
  PasswordInput,
  PinInput,
  Radio,
  Rating,
  SegmentedControl,
  Select,
  Slider,
  Switch,
  TextInput,
  Textarea,
} from '@mantine/core';

import List from '../List';

const meta = {
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  component: TextInput,
  title: '2-mantine/Inputs',
} satisfies Meta<typeof TextInput>;

export default meta;
type IStory = StoryObj<typeof meta>;

const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Vue', value: 'vue' },
];
const span = 2;
export const Inputs: IStory = {
  args: {
    disabled: false,
  },
  render: (props) => (
    <>
      <List
        Cmp={Autocomplete}
        commonProps={{ ...props, data }}
        span={span}
        title="Autocomplete"
        variantProps={{
          variant: ['unstyled', 'default', 'filled'],
        }}
      />
      <List Cmp={Checkbox} commonProps={props} title="Checkbox" />
      <List
        // @ts-expect-error ignore
        Cmp={Chip}
        commonProps={{ ...props, children: 'Text' }}
        span={span}
        title="Chip"
      />
      <List
        Cmp={ColorInput}
        commonProps={props}
        span={span}
        title="ColorInput"
        variantProps={{
          variant: ['unstyled', 'default', 'filled'],
        }}
      />
      <List
        Cmp={FileInput}
        commonProps={props}
        span={span}
        title="FileInput"
        variantProps={{
          variant: ['unstyled', 'default', 'filled'],
        }}
      />
      <List
        Cmp={MultiSelect}
        commonProps={{ ...props, data }}
        span={span}
        title="MultiSelect"
        variantProps={{
          variant: ['unstyled', 'default', 'filled'],
        }}
      />
      <List
        Cmp={NumberInput}
        commonProps={props}
        span={span}
        title="NumberInput"
        variantProps={{
          variant: ['unstyled', 'default', 'filled'],
        }}
      />
      <List
        Cmp={PasswordInput}
        commonProps={props}
        span={span}
        title="PasswordInput"
        variantProps={{
          variant: ['unstyled', 'default', 'filled'],
        }}
      />
      <List
        Cmp={PinInput}
        commonProps={props}
        span={span}
        title="PinInput"
        variantProps={{
          variant: ['unstyled', 'default', 'filled'],
        }}
      />
      <List Cmp={Radio} commonProps={props} span={span} title="Radio" />
      <List Cmp={Rating} commonProps={props} span={span} title="Rating" />
      <List
        // @ts-expect-error ignore
        Cmp={SegmentedControl}
        commonProps={{ ...props, data }}
        span={span}
        title="SegmentedControl"
        variantProps={{
          variant: ['unstyled', 'default', 'filled'],
        }}
      />
      <List
        Cmp={Select}
        commonProps={{ ...props, data }}
        span={span}
        title="Select"
        variantProps={{
          variant: ['unstyled', 'default', 'filled'],
        }}
      />
      <List Cmp={Slider} commonProps={props} span={span} title="Slider" />
      <List Cmp={Switch} commonProps={props} span={span} title="Switch" />
      <List
        Cmp={Textarea}
        commonProps={props}
        span={span}
        title="Textarea"
        variantProps={{
          variant: ['unstyled', 'default', 'filled'],
        }}
      />
      <List
        Cmp={TextInput}
        commonProps={props}
        span={span}
        title="TextInput"
        variantProps={{
          variant: ['unstyled', 'default', 'filled'],
        }}
      />
    </>
  ),
};
