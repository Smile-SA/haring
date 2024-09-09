import type { IDynamicZoneBlockReference } from '../Form/DynamicZone/DynamicZoneBlock/DynamicZoneBlock';
import type { ButtonProps } from '@mantine/core';
import type { IAction } from '@smile/haring-react-shared';
import type { ReactNode } from 'react';

export type IBaseBlockType = string;

export interface IBaseBlock extends Record<string, unknown> {
  blockActions?: IAction<IDynamicZoneBlockReference>[];
  blockFooter?: ReactNode;
  blockHeader: ReactNode;
  blockType: IBaseBlockType;
  readonly id: string;
  opened: boolean;
}

export interface IBaseBlockButton extends ButtonProps {
  blockType: IBaseBlockType;
  label: string;
}
