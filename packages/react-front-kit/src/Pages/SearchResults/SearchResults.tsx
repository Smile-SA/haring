'use client';

import type { FormEvent, ReactElement } from 'react';

import { primaryTheme, secondaryTheme } from '@smile/react-front-kit-shared';
import { useState } from 'react';

import { Header } from '../../Components/Header/Header';
import Motif from '../../Components/InfoCard/Motif';
import { FoldableColumnLayout } from '../../Layouts/FoldableColumnLayout/FoldableColumnLayout';

import {
  content,
  headerContent,
  headerLeft,
  headerRight,
  sidebarContent,
  topBarRight,
  topBlock,
} from './SearchResults.mock';

/**
 * Example Page of a search results page, actions and attributes in a `ResponsiveTabs` component
 */
export function SearchResults(): ReactElement {
  const [search, setSearch] = useState('');

  function handleSearchSubmit(event: FormEvent): void {
    event.preventDefault();
  }

  return (
    <FoldableColumnLayout
      appShellProps={{
        header: (
          <Header
            childrenComponent="nav"
            left={headerLeft}
            onSearchChange={setSearch}
            onSearchSubmit={handleSearchSubmit}
            right={headerRight}
            searchTheme={primaryTheme}
            searchValue={search}
          >
            {headerContent}
          </Header>
        ),
        padding: 0,
      }}
      boxMotif={<Motif style={{ fill: '#868E96', opacity: 0.1 }} />}
      boxProps={{ p: '50px 64px' }}
      sidebarContent={sidebarContent}
      sidebarToggleLabel="Filtres actifs (3)"
      topBarRight={topBarRight}
      topBlock={topBlock}
      topBlockTheme={{ ...secondaryTheme, colorScheme: 'dark' }}
    >
      {content}
    </FoldableColumnLayout>
  );
}
