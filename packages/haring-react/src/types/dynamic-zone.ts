import type { IDynamicZoneBlockReference } from '../Form/DynamicZone/DynamicZoneBlock/DynamicZoneBlock';
import type { ButtonProps } from '@mantine/core';
import type {
  IAction,
  IOmitRespectIndexSignature,
} from '@smile/haring-react-shared';
import type { ReactElement, ReactNode } from 'react';

export type IBaseBlockType = string;

export interface IBaseBlock extends Record<string, unknown> {
  blockActions?: IAction<IDynamicZoneBlockReference>[];
  blockFooter?: ReactNode;
  blockHeader: ReactNode;
  blockType: IBaseBlockType;
  readonly id: string;
  opened: boolean;
}

// TODO: wip, try replacing the type of the blocks array with this rather than BaseBlock, will require a bunch of changes in FormDynamicZone and with <T>
export interface IBlock extends Record<string, unknown> {
  blockType: IBaseBlockType;
  readonly id: string;
  opened: boolean;
}

export interface IBaseBlockButton extends ButtonProps {
  blockType: IBaseBlockType;
  label: string;
}

export interface IFormDynamicZoneBlock<T extends IBaseBlock> {
  block: IOmitRespectIndexSignature<T, 'id'>;
  button: IBaseBlockButton;
  renderFunc: (block: T, index: number) => ReactElement;
}
