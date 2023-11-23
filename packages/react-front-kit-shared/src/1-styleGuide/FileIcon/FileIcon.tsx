'use client';

import type { Icon, IconProps } from '@phosphor-icons/react';
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

const iconMap = new Map([
  ['CSS', FileCss],
  ['DOC', FileDoc],
  ['PDF', FilePdf],
  ['CSV', FileCsv],
  ['HTML', FileHtml],
  ['JPG', FileJpg],
  ['JS', FileJs],
  ['JSX', FileJsx],
  ['PNG', FilePng],
  ['PPT', FilePpt],
  ['RS', FileRs],
  ['SQL', FileSql],
  ['SVG', FileSvg],
  ['TS', FileTs],
  ['TSX', FileTsx],
  ['VUE', FileVue],
  ['XLS', FileXls],
  ['ZIP', FileZip],
]);

function getIconByType(type?: string): Icon {
  return type ? iconMap.get(type.toUpperCase()) ?? File : File;
}

export interface IFileIconProps extends IconProps {
  type?: string;
}

export function FileIcon(props: IFileIconProps): ReactElement {
  const { type, ...iconProps } = props;
  const Icon = getIconByType(type);
  return <Icon {...iconProps} />;
}
