import type { IThumbnail } from '../Thumbnail/Thumbnail';

import { thumbnailActions } from '../Thumbnail/Thumbnail.mock';

export const baseThumbnail: Omit<IThumbnail, 'id' | 'label'> = {
  actions: thumbnailActions,
  iconType: 'PDF',
};

export const thumbnails: IThumbnail[] = [
  {
    id: '1',
    label: 'Debit_Suivi_PREV',
    ...baseThumbnail,
  },
  {
    id: '2',
    label: 'Debit_Suivi_PREV_2',
    ...baseThumbnail,
    selected: true,
  },
  {
    id: '3',
    label: 'Debit_Suivi_PREV_3',
    ...baseThumbnail,
  },
];

export function getModalTitle(n: number): string {
  return `Remove ${n} file${n > 1 ? 's' : ''}`;
}
