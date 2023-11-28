import type { ITableData } from '../../types';
import type { ITableProps } from '../Table/Table';
import type { Record } from '@phosphor-icons/react';
import type {
  IAction,
  IDataView,
  ISwitchableViewProps,
  IThumbnail,
  IThumbnailData,
  IThumbnailGridProps,
} from '@smile/react-front-kit';
import type { MRT_RowSelectionState } from 'mantine-react-table';
import type { ReactElement, SetStateAction } from 'react';

import { createStyles } from '@mantine/styles';
import { ListBullets, SquaresFour } from '@phosphor-icons/react';
import { SwitchableView, ThumbnailGrid } from '@smile/react-front-kit';
import { isNotNullNorEmpty, typeGuard } from '@smile/react-front-kit-shared';
import { useState } from 'react';

import { Table } from '../Table/Table';

const useStyles = createStyles(() => ({
  tablePaper: {
    border: 'none',
    borderRadius: '4px',
  },
}));

export type ITableGridAction<Data extends Record<string, unknown>> = IAction<
  ITableData<Data> | IThumbnailData
>;

export interface ITableGridViewGridProps
  extends Omit<
    IThumbnailGridProps,
    'actions' | 'onThumbnailClick' | 'thumbnails'
  > {
  iconTypeFieldName?: string;
  idFieldName: string;
  imageFieldName?: string;
  labelFieldName: string;
}

export type ITableGridViewTableProps<Data extends Record<string, unknown>> =
  Omit<ITableProps<Data>, 'actions' | 'data'>;

export interface ITableGridViewProps<Data extends Record<string, unknown>>
  extends Omit<ISwitchableViewProps, 'views'> {
  actions?: ITableGridAction<Data>[];
  data: Data[];
  defaultView?: 'grid' | 'table';
  gridProps: ITableGridViewGridProps;
  tableProps: ITableGridViewTableProps<Data>;
}

export function TableGridView<Data extends Record<string, unknown>>(
  props: ITableGridViewProps<Data>,
): ReactElement {
  const {
    actions = [],
    data,
    defaultView = 'table',
    gridProps,
    tableProps,
    ...switchableViewProps
  } = props;
  const {
    iconTypeFieldName,
    idFieldName,
    labelFieldName,
    imageFieldName,
    ...otherGridProps
  } = gridProps;
  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});
  const selectedIndexes = Object.entries(rowSelection).map((entry) =>
    entry[1] ? entry[0] : null,
  );

  const { classes } = useStyles();

  const thumbnails: IThumbnail[] = data
    .map((item, index) => {
      const id = item[gridProps.idFieldName];
      const label = item[gridProps.labelFieldName];
      const image =
        gridProps.imageFieldName !== undefined
          ? (item[gridProps.imageFieldName] as string)
          : undefined;
      const iconType =
        gridProps.iconTypeFieldName !== undefined
          ? (item[gridProps.iconTypeFieldName] as string)
          : undefined;
      const isSelected = selectedIndexes.includes(index.toString());

      if (
        (typeGuard(id, 'number') || typeGuard(id, 'string')) &&
        typeGuard(label, 'string')
      ) {
        const thumbnail: IThumbnail = {
          ...item,
          iconType,
          id,
          image,
          label,
          selected: isSelected,
        };
        return thumbnail;
      }
      return null;
    })
    .filter(isNotNullNorEmpty);

  function handleTableSelect(row: SetStateAction<MRT_RowSelectionState>): void {
    setRowSelection(row);
  }

  function handleThumbnailSelect(index: number): void {
    const newRowSelection = { ...rowSelection };
    newRowSelection[index] = !newRowSelection[index];
    setRowSelection(newRowSelection);
  }

  const extendedTableProps: ITableProps<Data> = {
    data,
    enableBottomToolbar: false,
    enableRowSelection: true,
    mantinePaperProps: {
      className: classes.tablePaper,
    },
    onRowSelectionChange: handleTableSelect,
    state: { rowSelection },
    ...tableProps,
  };

  const views: IDataView[] = [
    {
      dataView: (
        <Table
          actions={actions as IAction<ITableData<Data>>[]}
          {...extendedTableProps}
        />
      ),
      label: <ListBullets />,
      value: 'table',
    },
    {
      dataView: (
        <ThumbnailGrid
          actions={actions as IAction<IThumbnailData>[]}
          thumbnails={thumbnails}
          {...otherGridProps}
          onThumbnailClick={(_, i) => handleThumbnailSelect(i)}
        />
      ),
      label: <SquaresFour />,
      value: 'grid',
    },
  ];

  return (
    <SwitchableView
      style={{ gap: 32 }}
      {...switchableViewProps}
      defaultValue={defaultView === 'table' ? 0 : 1}
      views={views}
    />
  );
}
