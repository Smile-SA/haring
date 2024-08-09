import type { IAction } from '@smile/haring-react-shared';

export interface IThumbnail extends Record<string, unknown> {
  ariaLabel?: string;
  iconType?: string;
  id: number | string;
  image?: string;
  label?: string;
  onClick?: () => void;
  selected?: boolean;
}

export type IThumbnailData = IThumbnail | IThumbnail[];

export type IThumbnailAction = IAction<IThumbnailData>;
