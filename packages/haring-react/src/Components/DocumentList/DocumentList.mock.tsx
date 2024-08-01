import type { IDocument } from '../../../dist';

import { Button, Space } from '@mantine/core';
import { DownloadSimple } from '@phosphor-icons/react';

export const documentsMock: IDocument[] = [
  {
    author: 'Author Name',
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <Button color="gray.8">
          <DownloadSimple aria-label="download icon" width={12} />
          <Space w={8} />
          PDF, FR - 1Mo
        </Button>
      </>
    ),
    date: 'Published on December 24, 2023',
    iconType: 'PDF',
    id: 1,
    path: '(Customer > 567890456 > Invoices)',
    title: 'Random_File.PDF',
  },
  {
    author: 'Author Name',
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <Button color="gray.8">
          <DownloadSimple width={12} />
          <Space w={8} />
          PPT, FR - 1Mo
        </Button>
      </>
    ),
    date: 'Published on December 24, 2023',
    iconType: 'PPT',
    id: 2,
    path: '(Customer > 567890456 > Invoices)',
    title: 'Presentation.PPT',
  },
  {
    author: 'Author Name',
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <Button color="gray.8">
          <DownloadSimple width={12} />
          <Space w={8} />
          PDF, FR - 1Mo
        </Button>
      </>
    ),
    date: 'Published on December 24, 2023',
    iconType: 'PDF',
    id: 3,
    path: '(Customer > 567890456 > Invoices)',
    title: 'Other_random_File.PDF',
  },
];
