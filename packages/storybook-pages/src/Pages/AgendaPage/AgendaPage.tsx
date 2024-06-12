'use client';

import type { ReactElement } from 'react';

import { Badge, Group } from '@mantine/core';
import { PencilSimple, Trash } from '@phosphor-icons/react';
import { Table } from '@smile/haring-react-table';

/**
 * Primary UI component for user interaction
 */
export function AgendaPage(): ReactElement {
  return (
    <Table
      actions={[
        {
          icon: <PencilSimple />,
          id: 'edit',
          label: 'Edit document',
          onAction: () => {
            console.log('Edit');
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          ),
        },
      ]}
      rowActionNumber={2}
    />
  );
}
