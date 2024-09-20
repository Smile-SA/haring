import type { IDynamicZoneBlockReference } from '../Form/DynamicZone/DynamicZoneBlock/DynamicZoneBlock';
import type { ButtonProps } from '@mantine/core';
import type {
  IAction,
  IOmitRespectIndexSignature,
} from '@smile/haring-react-shared';
import type { ReactElement, ReactNode } from 'react';

export type IBaseBlockType = string;

export interface IBaseBlock extends Record<string, unknown> {
  blockType: IBaseBlockType;
  readonly id: string;
  opened: boolean;
}

export interface IBaseBlockOptions {
  blockActions?: IAction<IDynamicZoneBlockReference>[];
  blockFooter?: ReactNode;
  blockHeader?: ReactNode;
}

export type IBaseBlockFull<Block extends IBaseBlock = IBaseBlock> = Block &
  IBaseBlockOptions;

export interface IBaseBlockButton extends ButtonProps {
  blockType: IBaseBlockType;
  label: string;
}

export interface IFormDynamicZoneBlock<Block extends IBaseBlock> {
  block: IOmitRespectIndexSignature<Block, 'id'>;
  blockOptions: IBaseBlockOptions;
  button: IBaseBlockButton;
  renderFunc: (block: IBaseBlockFull, index: number) => ReactElement;
}
