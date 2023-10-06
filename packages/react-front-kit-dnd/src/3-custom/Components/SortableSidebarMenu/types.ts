import type { IMenuItem } from '@smile/react-front-kit/src/Components/SidebarMenu/types';
import type { IFlattenedObject } from '@smile/react-front-kit/src/helpers';
import type { MutableRefObject } from 'react';

export type ISensorContext = MutableRefObject<{
  items: IFlattenedObject<IMenuItem>[];
  offset: number;
}>;
