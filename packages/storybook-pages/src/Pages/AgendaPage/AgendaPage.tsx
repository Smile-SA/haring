'use client';

import type { ReactElement } from 'react';

import { Badge, Button, Group } from '@mantine/core';
import { PencilSimple, Trash } from '@phosphor-icons/react';
import { Table } from '@smile/haring-react-table';
import { useState } from 'react';

export function AgendaPage(): ReactElement {
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
  return (
    <>
      <Button>Ajouter un sujet</Button>
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
              onCancel: () => {
                console.log('Delete:cancel');
              },
              onConfirm: () => {
                console.log('Delete:Confirm');
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
        data={[
          {
            indicator: (
              <Group gap="5px">
                <Badge color="blue">DEV</Badge>
              </Group>
            ),
            schedules: (
              <div>
                <p>
                  <strong>À 9h30</strong>
                </p>
              </div>
            ),
            subject: (
              <div>
                <strong>Dally MFC </strong>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            ),
          },
          {
            indicator: (
              <Group gap="5px">
                <Badge color="blue">Dev</Badge>
                <Badge>UI</Badge>
              </Group>
            ),
            schedules: (
              <div>
                <p>
                  <strong>De 11h à 12h</strong>
                </p>
              </div>
            ),
            subject: (
              <div>
                <strong>AMF review sprint 2 </strong>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            ),
          },
          {
            indicator: (
              <Group gap="5px">
                <Badge color="orange">UX</Badge>
                <Badge>UI</Badge>
              </Group>
            ),
            schedules: (
              <div>
                <p>
                  <strong>De 16h30 à 18h</strong>
                </p>
              </div>
            ),
            subject: (
              <div>
                <strong>Brainstorming Maquettes TTTS </strong>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            ),
          },
        ]}
        rowActionNumber={2}
      />
    </>
  );
}
