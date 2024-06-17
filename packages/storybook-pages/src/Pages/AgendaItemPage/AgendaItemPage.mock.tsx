import type { IMenuItem } from '@smile/haring-react';

export const breadcrumbsMock = [
  <a key="1" href="#">
    First level
  </a>,
  <a key="2" href="#">
    Second level
  </a>,
  <a key="3" href="#">
    Third level
  </a>,
];

export const menusMock: IMenuItem<string>[] = [
  {
    id: '1',
    label: 'Ordre 1',
  },
  {
    id: '2',
    label: 'Ordre 2',
  },
  {
    id: '3',
    label: 'Ordre 3',
  },
];
