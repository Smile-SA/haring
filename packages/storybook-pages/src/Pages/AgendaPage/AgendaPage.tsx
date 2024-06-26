'use client';

import type { MRT_Row } from 'mantine-react-table';
import type { ReactElement, ReactNode } from 'react';

import {
  Badge,
  Button,
  Checkbox,
  Flex,
  Group,
  NativeSelect,
  Stack,
  TextInput,
} from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import {
  Clock,
  FilePdf,
  PencilSimple,
  Plus,
  Trash,
  X,
} from '@phosphor-icons/react';
import {
  ConfirmModal,
  FoldableColumnLayout,
  SidebarMenu,
} from '@smile/haring-react';
import { Table } from '@smile/haring-react-table';
import { useState } from 'react';

import { menuMock } from '../BrowsingPage/BrowsingPage.mock';

import { texts } from './AgendaPage.mock';

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

interface IDataItem extends Record<string, unknown> {
  indicator: IIndicator[];
  schedules: ISchedules;
  subject: ISubject;
}

export function AgendaPage(): ReactElement {
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
  const [modalOpened, { open, close }] = useDisclosure(false);
  const [newTitleChecked, setNewTitleChecked] = useState<boolean>(false);
  const [showTimeValueError, setShowTimeValueError] = useState<boolean>(false);
  const [newTempIndicator, setNewTempIndicator] = useState<IIndicator>({
    color: 'blue',
    value: '',
  });
  const addSubjectForm = useForm<IDataItem>({
    initialValues: {
      indicator: [],
      schedules: { startTime: '' },
      subject: {
        content: '',
        title: data[0].subject.title,
      },
    },
    mode: 'uncontrolled',
    validate: {
      indicator: (value) =>
        value.length === 0 && 'Veuillez renseigner au moins un indicateur',
      schedules: {
        startTime: (value) =>
          value === '' && 'Veuillez renseigner une heure de début.',
      },
      subject: {
        content: (value) =>
          value === '' && 'Veuillez renseigner le contenu du sujet',
        title: (value) => value === '' && 'Veuillez renseigner un titre.',
      },
    },
  });

  function removeSubject(row: MRT_Row<IDataItem>): void {
    if (row.index >= 0 && row.index < data.length) {
      setData(data.filter((_, i) => i !== row.index));
    }
  }

  function handleSetTimeForm(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    const timeValue = value.toString().replace(':', 'h');

    const { startTime, endTime } = addSubjectForm.getValues().schedules;

    const startTimeNumber =
      name === 'startTime'
        ? parseInt(timeValue.replace('h', '0'), 10)
        : parseInt(startTime.replace('h', '0'), 10);
    const endTimeNumber =
      name === 'endTime'
        ? parseInt(timeValue.replace('h', '0'), 10)
        : endTime !== undefined
          ? parseInt(endTime.replace('h', '0'), 10)
          : undefined;

    if (endTimeNumber !== undefined && endTimeNumber < startTimeNumber) {
      setShowTimeValueError(true);
    } else {
      addSubjectForm.setFieldValue(`schedules.${name}`, timeValue);
      setShowTimeValueError(false);
    }
  }

  const defaultIndicator: IIndicator[] = [
    { color: 'orange', value: 'ux' },
    { color: 'green', value: 'ui' },
    { color: 'blue', value: 'dev' },
  ];

  function handleAddIndicator(): void {
    if (
      addSubjectForm
        .getValues()
        .indicator.filter(
          (item) =>
            item.value.toLowerCase() === newTempIndicator.value.toLowerCase(),
        ).length === 0 &&
      newTempIndicator.value !== ''
    ) {
      const foundIndicator = defaultIndicator.find(
        (indicator) => indicator.value === newTempIndicator.value,
      );

      if (foundIndicator) {
        addSubjectForm.insertListItem('indicator', {
          color: foundIndicator.color,
          value: newTempIndicator.value,
        });
      } else {
        addSubjectForm.insertListItem('indicator', newTempIndicator);
      }

      setNewTempIndicator({
        color: '',
        value: '',
      });
    }
  }

  function addSubject(): void {
    if (addSubjectForm.isValid() && !showTimeValueError) {
      setData([addSubjectForm.getValues(), ...data]);
      addSubjectForm.reset();
      close();
    }
  }

  const formIndicatorList = addSubjectForm
    .getValues()
    .indicator.map((indicator) => (
      <Badge key={indicator.value} color={indicator.color} size="xl">
        <Group justify="center">
          {indicator.value}
          <X
            cursor="pointer"
            onClick={() =>
              addSubjectForm.removeListItem(
                'indicator',
                addSubjectForm
                  .getValues()
                  .indicator.findIndex(
                    (item) => item.value === indicator.value,
                  ),
              )
            }
          />
        </Group>
      </Badge>
    ));

  const sidebarMenu = menuMock;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const tableData: IDataItem[] = data.map((element) => {
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
                ? `${texts.of} ${element.schedules.startTime} ${texts.to} ${element.schedules.endTime}`
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

  const subjectForm: ReactNode = (
    <form>
      <Stack>
        <Checkbox
          checked={newTitleChecked}
          label={texts.modalCheckBox}
          onChange={(event) => setNewTitleChecked(event.currentTarget.checked)}
        />
        {newTitleChecked ? (
          <TextInput
            key={addSubjectForm.key('subject.title')}
            label={texts.formTitleLabel}
            placeholder={texts.formTitleLabel}
            required
            {...addSubjectForm.getInputProps('subject.title')}
          />
        ) : (
          <NativeSelect
            key={addSubjectForm.key('subject.title')}
            data={data.map((item) => item.subject.title)}
            label={texts.formTitleLabel}
            name={texts.formTitleLabel}
            onChange={(e) =>
              addSubjectForm.setFieldValue('subject.title', e.target.value)
            }
            required
            value={addSubjectForm.getValues().subject.title}
          />
        )}

        <TextInput
          key={addSubjectForm.key('subject.content')}
          label={texts.formContentLabel}
          placeholder={texts.formContentLabel}
          required
          {...addSubjectForm.getInputProps('subject.content')}
        />
        <Stack gap={0}>
          <Group grow justify="space-between">
            <TimeInput
              label={texts.formStartTimeLabel}
              leftSection={<Clock />}
              name={texts.formStartTimeName}
              onChange={handleSetTimeForm}
              required
            />
            <TimeInput
              label={texts.formEndTimeLabel}
              leftSection={<Clock />}
              name={texts.formEndTimeName}
              onChange={handleSetTimeForm}
            />
          </Group>
          <Group>
            {showTimeValueError ? <p>{texts.timeErrorMessage}</p> : null}
          </Group>
        </Stack>
        <Group align="end" grow justify="space-between">
          <TextInput
            label={texts.indicator}
            name={texts.value}
            onChange={(e) =>
              setNewTempIndicator({
                ...newTempIndicator,
                [e.target.name]: e.target.value,
              })
            }
            placeholder={texts.name}
            value={newTempIndicator.value}
          />
          {!defaultIndicator.find(
            (item) =>
              item.value.toLowerCase() === newTempIndicator.value.toLowerCase(),
          ) && (
            <NativeSelect
              aria-placeholder={texts.color}
              data={texts.indicatorColorData}
              label={texts.color}
              name={texts.color}
              onChange={(e) =>
                setNewTempIndicator({
                  ...newTempIndicator,
                  [e.target.name]: e.target.value,
                })
              }
              value={newTempIndicator.color}
            />
          )}

          <Button onClick={handleAddIndicator}>Ajouter</Button>
        </Group>
        <Group justify="center">
          {addSubjectForm.getValues().indicator.length
            ? formIndicatorList
            : null}
        </Group>
      </Stack>
    </form>
  );

  return (
    <FoldableColumnLayout
      sidebarContent={
        <Flex direction="column" gap={24}>
          <SidebarMenu menu={sidebarMenu} />
        </Flex>
      }
      sidebarToggleLabel={texts.sidebarToggleLabel}
    >
      <ConfirmModal
        cancelColor="red"
        confirmColor="black"
        onCancel={() => {
          close();
        }}
        onClose={close}
        onConfirm={() => {
          addSubject();
        }}
        opened={modalOpened}
        title={texts.addSubject}
      >
        {subjectForm}
      </ConfirmModal>

      <Group justify="space-between">
        <Button mb="md" onClick={open} rightSection={<Plus size={14} />}>
          {texts.addSubject}
        </Button>
        <Button mb="md" rightSection={<FilePdf size={14} />}>
          {texts.pdfExport}
        </Button>
      </Group>
      <Table<IDataItem>
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
                removeSubject(row as MRT_Row<IDataItem>);
              },
              title: `${texts.remove} ?`,
            },
            confirmation: true,
            icon: <Trash />,
            id: 'delete',
            isMassAction: true,
            label: texts.remove,
          },
        ]}
        columns={[
          {
            accessorKey: 'subject',
            filterFn: (row, _id, value: string) => {
              if (
                data[row.index].subject.title
                  .toLowerCase()
                  .includes(value.toLowerCase()) ||
                data[row.index].subject.content
                  .toLowerCase()
                  .includes(value.toLowerCase())
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
        data={tableData}
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
