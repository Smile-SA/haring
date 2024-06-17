'use client';

import type { ReactElement } from 'react';

import { Badge, Button, Flex, Group } from '@mantine/core';
import { FilePdf, PencilSimple, Plus, Trash } from '@phosphor-icons/react';
import { FoldableColumnLayout, SidebarMenu } from '@smile/haring-react';
import { Table } from '@smile/haring-react-table';
import { useState } from 'react';

import { menuMock } from '../BrowsingPage/BrowsingPage.mock';

import { texts } from './AgendaPage.txt';

interface IIndicator {
  color: string;
  value: string;
}

interface ISchedules {
  endTime?: string;
  startTime: string;
}

interface ISubject {
  content: string;
  title: string;
}

interface IDataItem {
  indicator: IIndicator[];
  schedules: ISchedules;
  subject: ISubject;
}

export function AgendaPage(): ReactElement {
  // eslint-disable-next-line
  function removeSubject(row: any): void {
    if (row?.index >= 0 && row.index < data.length) {
      setData(data.filter((_, i) => i !== row.index));
    }
  }

  const [data, setData] = useState<IDataItem[]>([
    {
      indicator: [{ color: 'blue', value: 'DEV' }],
      schedules: { startTime: '9h30' },
      subject: {
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        title: 'Dally MFC',
      },
    },
    {
      indicator: [
        { color: 'blue', value: 'DEV' },
        { color: 'green', value: 'UI' },
      ],
      schedules: { endTime: '12h', startTime: '11h' },
      subject: {
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        title: 'AMF review sprint 2',
      },
    },
    {
      indicator: [
        { color: 'orange', value: 'UX' },
        { color: 'green', value: 'UI' },
      ],
      schedules: { endTime: '18h', startTime: '16h30' },
      subject: {
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        title: 'Brainstorming Maquettes TTTS',
      },
    },
  ]);

  const sidebarMenu = menuMock;

  function getDataForTable(): {
    indicator: ReactElement;
    schedules: ReactElement;
    subject: ReactElement;
  }[] {
    return data.map((element) => {
      return {
        indicator: (
          <Group gap="5px">
            {element.indicator.map((badge) => (
              <Badge key={badge.value} color={badge.color}>
                {badge.value}
              </Badge>
            ))}
          </Group>
        ),
        schedules: (
          <div>
            <p>
              <strong>
                {element.schedules.endTime
                  ? `${texts.of} ${element.schedules.startTime} ${texts.of} ${element.schedules.endTime}`
                  : `${texts.to.toUpperCase()} ${element.schedules.startTime}`}
              </strong>
            </p>
          </div>
        ),
        subject: (
          <div>
            <strong>{element.subject.title}</strong>
            <br />
            <p>{element.subject.content}</p>
          </div>
        ),
      };
    });
  }
  return (
    <FoldableColumnLayout
      sidebarContent={
        <Flex direction="column" gap={24}>
          <SidebarMenu menu={sidebarMenu} />
        </Flex>
      }
      sidebarToggleLabel={texts.sidebarToggleLabel}
    >
      <Group justify="space-between">
        <Button mb="md" rightSection={<Plus size={14} />}>
          {texts.addSubject}
        </Button>
        <Button mb="md" rightSection={<FilePdf size={14} />}>
          {texts.pdfExport}
        </Button>
      </Group>
      <Table
        actions={[
          {
            icon: <PencilSimple />,
            id: 'edit',
            label: texts.editDocument,
            onAction: () => {
              window.parent.location.href =
                'http://localhost:6006/?path=/story/3-custom-pages-agendaitempage--agenda-item-page';
            },
          },
          {
            color: 'red',
            confirmModalProps: {
              cancelLabel: texts.cancel,
              children: texts.removeVerif,
              confirmColor: 'red',
              confirmLabel: texts.remove,
              onConfirm: (row) => {
                removeSubject(row);
              },
              title: `${texts.remove} ?`,
            },
            confirmation: true,
            icon: <Trash />,
            id: 'delete',
            isMassAction: true,
            label: texts.remove,
            onAction: () => {
              console.log('Delete');
            },
          },
        ]}
        columns={[
          {
            accessorKey: 'subject',
            filterFn: (row, _id, value: string) => {
              if (
                data[row.index].subject.title.toLowerCase().includes(value) ||
                data[row.index].subject.content.toLowerCase().includes(value)
              ) {
                return true;
              }
              return false;
            },
            header: texts.topics,
          },
          {
            accessorKey: 'indicator',
            filterFn: (row, _id, value: string) => {
              return (
                data[row.index].indicator.filter((element) => {
                  return element.value.toLowerCase().includes(value);
                }).length > 0
              );
            },
            header: texts.indicator,
          },
          {
            accessorKey: 'schedules',
            filterFn: (row, _id, value: string) => {
              if (
                data[row.index].schedules.startTime
                  .toLowerCase()
                  .includes(value) ||
                data[row.index].schedules.endTime?.toLowerCase().includes(value)
              ) {
                return true;
              }
              return false;
            },
            header: texts.schedules,
          },
        ]}
        data={getDataForTable()}
        displayColumnDefOptions={{
          'mrt-row-actions': {
            header: undefined,
            maxSize: 10,
            minSize: 10,
            size: 10,
          },
        }}
        initialState={{
          pagination: { pageIndex: 0, pageSize: 6 },
        }}
        paginationProps={{
          itemsPerPageAriaLabel: texts.resutsNbr,
          itemsPerPageOptions: [
            {
              label: texts.displaySpecificResultNbr(6),
              value: 6,
            },
            { label: texts.displaySpecificResultNbr(15), value: 15 },
          ],
        }}
        rowActionNumber={2}
      />
    </FoldableColumnLayout>
  );
}
