import type { IAction } from '@smile/react-front-kit-shared';

export interface IThumbnail extends Record<string, unknown> {
  iconType?: string;
  id: number | string;
  image?: string;
  label?: string;
  onClick?: () => void;
  selected?: boolean;
}

export type IThumbnailData = IThumbnail | IThumbnail[];

export type IThumbnailAction = IAction<IThumbnailData>;
