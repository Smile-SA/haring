import { Button, Space } from '@mantine/core';
import { DownloadSimple } from '@phosphor-icons/react';

import { DocumentBox } from '../DocumentBox/DocumentBox';

export const selectableListElementsMock = [
  <DocumentBox
    key={1}
    author="Aline Dupon"
    date="Published on December 24, 2023"
    iconType="PDF"
    path="(Customer > 567890456 > Invoices)"
    title="Random_File.PDF"
  >
    <>
      <p>
        Ceci est une description faite pour cette facture et ajoutée par le
        créateur lors de l’import du document dans la GED, en l’absence de
        description cet espace est laissé vide...
      </p>
      <Button color="gray.8">
        <DownloadSimple width={12} />
        <Space w={8} />
        PDF, FR - 1Mo
      </Button>
    </>
  </DocumentBox>,
  <DocumentBox
    key={2}
    author="Julien Dominique"
    date="Published on December 24, 2023"
    iconType="ppt"
    path="(Customer > 567890456 > Invoices)"
    title="Presentation.PPT"
  >
    <>
      <p>
        Ceci est une description faite pour cette facture et ajoutée par le
        créateur lors de l’import du document dans la GED, en l’absence de
        description cet espace est laissé vide...
      </p>
      <Button color="gray.8">
        <DownloadSimple width={12} />
        <Space w={8} />
        PTT, FR - 1Mo
      </Button>
    </>
  </DocumentBox>,
  <DocumentBox
    key={3}
    author="Mohamed Aldri"
    date="Published on December 24, 2023"
    iconType="PDF"
    path="(Customer > 567890456 > Invoices)"
    title="Other_random_File.PDF"
  >
    <>
      <p>
        Ceci est une description faite pour cette facture et ajoutée par le
        créateur lors de l’import du document dans la GED, en l’absence de
        description cet espace est laissé vide...
      </p>
      <Button color="gray.8">
        <DownloadSimple width={12} />
        <Space w={8} />
        PDF, FR - 1Mo
      </Button>
    </>
  </DocumentBox>,
];
