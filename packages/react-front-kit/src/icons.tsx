import type { Icon } from '@phosphor-icons/react';

import * as Icons from '@phosphor-icons/react';

const iconsToIgnore = ['IconBase', 'IconContext'];
const iconEntries = Object.entries(Icons).filter(
  ([key]) => !iconsToIgnore.includes(key)
) as [string, Icon][];

export const icons = Object.fromEntries(iconEntries);

export const iconsElements = Object.fromEntries(
  iconEntries.map(([key, Icon]) => [key, <Icon key={key} />])
);
