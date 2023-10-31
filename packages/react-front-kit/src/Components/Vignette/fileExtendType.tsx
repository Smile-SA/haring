import type { MantineColor } from '@mantine/core';
import type { ReactElement } from 'react';

import {
  File,
  FileCss,
  FileCsv,
  FileDoc,
  FileHtml,
  FileJpg,
  FileJs,
  FileJsx,
  FilePdf,
  FilePng,
  FilePpt,
  FileRs,
  FileSql,
  FileSvg,
  FileTs,
  FileTsx,
  FileVue,
  FileXls,
  FileZip,
} from '@phosphor-icons/react';

export type IFileExtendType =
  | 'CSS'
  | 'CSV'
  | 'DOC'
  | 'HTML'
  | 'JPG'
  | 'JS'
  | 'JSX'
  | 'PDF'
  | 'PNG'
  | 'PPT'
  | 'RS'
  | 'SQL'
  | 'SVG'
  | 'TS'
  | 'TSX'
  | 'UNKNOWN'
  | 'VUE'
  | 'XLS'
  | 'ZIP';

export const getIconByIconType = (
  type: IFileExtendType,
  color: MantineColor,
): ReactElement => {
  switch (type) {
    case 'CSS':
      return (
        <FileCss
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    case 'DOC':
      return (
        <FileDoc
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    case 'PDF':
      return (
        <FilePdf
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    case 'CSV':
      return (
        <FileCsv
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    case 'HTML':
      return (
        <FileHtml
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    case 'JPG':
      return (
        <FileJpg
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    case 'JS':
      return (
        <FileJs
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    case 'JSX':
      return (
        <FileJsx
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    case 'PNG':
      return (
        <FilePng
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    case 'PPT':
      return (
        <FilePpt
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    case 'RS':
      return (
        <FileRs
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    case 'SQL':
      return (
        <FileSql
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    case 'SVG':
      return (
        <FileSvg
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    case 'TS':
      return (
        <FileTs
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    case 'TSX':
      return (
        <FileTsx
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    case 'VUE':
      return (
        <FileVue
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    case 'XLS':
      return (
        <FileXls
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    case 'ZIP':
      return (
        <FileZip
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    default: {
      return (
        <File
          color={color}
          size={22}
          style={{ minWidth: '28px' }}
          weight="bold"
        />
      );
    }
  }
};
