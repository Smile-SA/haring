'use client';

import type { Icon, IconWeight } from '@phosphor-icons/react';
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

export interface IFileExtendTypeProps {
  color?: string;
  size?: number;
  type?: string;
  weight?: IconWeight;
}

export function FileExtendType(props: IFileExtendTypeProps): ReactElement {
  const { color = 'black', size = 22, type = '', weight = 'bold' } = props;

  const getIconByIconType = (
    color: string,
    type: string,
    size: number,
    weight: IconWeight,
  ): ReactElement => {
    let ComponentName: Icon = File;
    switch (type.toUpperCase()) {
      case 'CSS':
        ComponentName = FileCss;
        break;
      case 'DOC':
        ComponentName = FileDoc;
        break;
      case 'PDF':
        ComponentName = FilePdf;
        break;
      case 'CSV':
        ComponentName = FileCsv;
        break;
      case 'HTML':
        ComponentName = FileHtml;
        break;
      case 'JPG':
        ComponentName = FileJpg;
        break;
      case 'JS':
        ComponentName = FileJs;
        break;
      case 'JSX':
        ComponentName = FileJsx;
        break;
      case 'PNG':
        ComponentName = FilePng;
        break;
      case 'PPT':
        ComponentName = FilePpt;
        break;
      case 'RS':
        ComponentName = FileRs;
        break;
      case 'SQL':
        ComponentName = FileSql;
        break;
      case 'SVG':
        ComponentName = FileSvg;
        break;
      case 'TS':
        ComponentName = FileTs;
        break;
      case 'TSX':
        ComponentName = FileTsx;
        break;
      case 'VUE':
        ComponentName = FileVue;
        break;
      case 'XLS':
        ComponentName = FileXls;
        break;
      case 'ZIP':
        ComponentName = FileZip;
        break;
    }

    const component = (
      <ComponentName
        color={color}
        size={size}
        style={{ minWidth: '28px' }}
        weight={weight}
      />
    );
    return component;
  };

  return <>{getIconByIconType(color, type, size, weight)}</>;
}
