'use client';

import type { ReactElement } from 'react';

import { Badge, Button, Group } from '@mantine/core';
import { PencilSimple, Plus, Trash } from '@phosphor-icons/react';
import { Table } from '@smile/haring-react-table';
import { useState } from 'react';

export function AgendaPage(): ReactElement {
  function removeSubject(row: any): void {
    if (row.index >= 0 && row.index < data.length) {
      setData(data.filter((_, i) => i !== row.index));
    }
  }

  const [data, setData] = useState([
    {
      id: 0,
      indicator: [{ color: 'blue', value: 'DEV' }],
      schedules: { startTime: '9h30' },
      subject: {
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        title: 'Dally MFC',
      },
    },
    {
      id: 1,
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
      id: 2,
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
              <Badge key={element.id + badge.value} color={badge.color}>
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
                  ? `De ${element.schedules.startTime} à ${element.schedules.endTime}`
                  : `À ${element.schedules.startTime}`}
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
    <>
      <Button mb="md" rightSection={<Plus size={14} />}>
        Ajouter un sujet
      </Button>
      <Table
        actions={[
          {
            icon: <PencilSimple />,
            id: 'edit',
            label: 'Edit document',
            onAction: () => {
              window.parent.location.href =
                'http://localhost:6006/?path=/story/3-custom-pages-agendaitempage--agenda-item-page';
            },
          },
          {
            color: 'red',
            confirmModalProps: {
              children: 'Are you sure you want to delete ?',
              confirmColor: 'red',
              confirmLabel: 'Delete',
              onConfirm: (row) => {
                removeSubject(row);
              },
              title: 'Delete ?',
            },
            confirmation: true,
            icon: <Trash />,
            id: 'delete',
            isMassAction: true,
            label: 'Delete',
            onAction: () => {
              console.log('Delete');
            },
          },
        ]}
        columns={[
          {
            accessorKey: 'subject',
            header: 'Sujets',
          },
          {
            accessorKey: 'indicator',
            header: 'Indicateurs',
          },
          {
            accessorKey: 'schedules',
            header: 'Horaires',
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
        rowActionNumber={2}
      />
    </>
  );
}
