import type { IDynamicZoneBlockReference } from '../Form/DynamicZone/DynamicZoneBlock/DynamicZoneBlock';
import type { ButtonProps, CardProps, TooltipProps } from '@mantine/core';
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

export interface IBaseBlockCardOptions {
  blockActions?: IAction<IDynamicZoneBlockReference>[];
  blockCardProps?: CardProps;
  blockFooter?:
    | ReactNode
    | ((block: IBaseBlockFull, index: number) => ReactNode);
  blockHeader?:
    | ReactNode
    | ((block: IBaseBlockFull, index: number) => ReactNode);
}

export type IBaseBlockFull<Block extends IBaseBlock = IBaseBlock> = Block &
  IBaseBlockCardOptions;

export interface IBaseBlockButtonOptions extends ButtonProps {
  blockType: IBaseBlockType;
  label: string | ((buttonProps: ButtonProps) => string);
  tooltipLabel?: string | ((buttonProps: ButtonProps) => string);
  tooltipProps?: Omit<TooltipProps, 'children' | 'key' | 'label'>;
}

export interface IBaseBlockButtonFullOptions extends IBaseBlockButtonOptions {
  maxInstances?: number;
}

export interface IFormDynamicZoneBlock<Block extends IBaseBlock> {
  block: IOmitRespectIndexSignature<Block, 'id'>;
  blockButtonOptions: IBaseBlockButtonFullOptions;
  blockCardOptions: IBaseBlockCardOptions;
  renderFunc: (block: IBaseBlockFull, index: number) => ReactElement;
}
