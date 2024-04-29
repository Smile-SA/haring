/* eslint-disable react-refresh/only-export-components */
import type { Icon } from '@phosphor-icons/react';

import * as ppIcons from '@phosphor-icons/react';

import * as customIcons from '../1-styleGuide/Icons';

const iconsToIgnore = ['IconBase', 'IconContext', 'SSR', 'default'];
const phosphorIconsEntries = Object.entries(ppIcons).filter(
  ([key]) => !iconsToIgnore.includes(key),
) as [string, Icon][];

export * as customIcons from '../1-styleGuide/Icons';
export const phosphorIcons = Object.fromEntries(phosphorIconsEntries);
export const icons: Record<string, Icon> = { ...customIcons, ...phosphorIcons };

export const iconsElements = Object.fromEntries(
  Object.entries(icons).map(([key, Icon]) => [key, <Icon key={key} />]),
);
