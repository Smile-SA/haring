import type { MantineColor } from '@mantine/core';
import type { Icon } from '@phosphor-icons/react';
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

export const getIconByIconType = (
  type: string,
  color: MantineColor,
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
      size={22}
      style={{ minWidth: '28px' }}
      weight="bold"
    />
  );
  return component;
};
