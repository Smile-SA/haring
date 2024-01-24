'use client';

import type { IButtonListOrDropdownProps } from '../ButtonListOrDropdown/ButtonListOrDropdown';
import type { IOption } from '@smile/react-front-kit-shared';
import type { ReactElement } from 'react';

import { createStyles } from '@mantine/styles';

import { ButtonListOrDropdown } from '../ButtonListOrDropdown/ButtonListOrDropdown';

export interface ILang extends IOption<string> {
  country?: string;
}

export interface IMenuLangProps
  extends Omit<IButtonListOrDropdownProps, 'items'> {
  langs: ILang[];
  squareFormat?: boolean;
}

const useStyles = createStyles(() => ({
  flag: { marginRight: '5px' },
}));

export function MenuLang(props: IMenuLangProps): ReactElement {
  const { langs, squareFormat = false, ...ButtonListOrDropdownProps } = props;
  const { classes } = useStyles();

  const items = langs.map((lang) => {
    const classNames = ['fi', `fi-${lang.country}`];
    if (squareFormat) {
      classNames.push('fis');
    }
    if (lang.label) {
      classNames.push(classes.flag);
    }
    return {
      content: (
        <>
          {Boolean(lang.country) && <i className={classNames.join(' ')} />}
          {lang.label}
        </>
      ),
      label: lang.label,
      value: lang.value,
    };
  });

  return (
    <div>
      <ButtonListOrDropdown items={items} {...ButtonListOrDropdownProps} />
    </div>
  );
}
