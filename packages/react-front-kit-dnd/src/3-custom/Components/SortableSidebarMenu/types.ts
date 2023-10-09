import type { IMenuItem } from '@smile/react-front-kit/src/Components/SidebarMenu/types';
import type { INestedObjectInfo } from '@smile/react-front-kit/src/helpers';
import type { MutableRefObject } from 'react';

export type ISensorContext = MutableRefObject<{
  items: INestedObjectInfo<IMenuItem>[];
  offset: number;
}>;
