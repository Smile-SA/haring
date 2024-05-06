import type { IActionBarProps } from './ActionBar';
import type { IThumbnail } from '../../types';

import {
  actionRowOverflowActionsMock,
  actionRowOverflowSelectedMock,
} from '../ActionList/ActionList.mock';

export const actionBarLabelMock = (elements: number): string =>
  `${elements} selected`;

export const actionBarMock: IActionBarProps<IThumbnail> = {
  actions: actionRowOverflowActionsMock,
  selectedElements: actionRowOverflowSelectedMock,
  selectedElementsLabel: actionBarLabelMock,
};
