import type { Meta, StoryObj } from '@storybook/react';
import type { ChangeEvent } from 'react';

import { useState } from 'react';

import { HeaderSearch as Cmp } from './HeaderSearch';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/HeaderSearch',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

function Render(props: Record<string, unknown>): JSX.Element {
  const [search, setSearch] = useState('');
  function handleSearchChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearch(event.target.value);
  }

  function handleSearchClear(): void {
    setSearch('');
  }
  return (
    <div style={{ position: 'relative' }}>
      <Cmp
        {...props}
        onChange={handleSearchChange}
        onClear={handleSearchClear}
        value={search}
      />
    </div>
  );
}

export const HeaderSearch: IStory = {
  args: {},
  render: Render,
};
