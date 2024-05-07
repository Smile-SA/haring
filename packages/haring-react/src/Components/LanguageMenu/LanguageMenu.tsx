'use client';

import type { IButtonListProps } from '../ButtonList/ButtonList';
import type { IOption } from '@smile/haring-react-shared';
import type { ReactElement } from 'react';

import { ButtonList } from '../ButtonList/ButtonList';

import classes from './LanguageMenu.module.css';

export interface ILang extends IOption<string> {
  country?: string;
}

export interface ILanguageMenuProps extends Omit<IButtonListProps, 'items'> {
  languages: ILang[];
  squareFormat?: boolean;
}

export function LanguageMenu(props: ILanguageMenuProps): ReactElement {
  const { languages, squareFormat = false, ...ButtonListProps } = props;

  const items = languages.map((language) => {
    const classNames = ['fi', `fi-${language.country?.toLowerCase()}`];
    if (squareFormat) {
      classNames.push('fis');
    }
    if (language.label) {
      classNames.push(classes.flag as string);
    }
    return {
      content: (
        <>
          {Boolean(language.country) && <i className={classNames.join(' ')} />}
          {language.label}
        </>
      ),
      label: language.label,
      value: language.value,
    };
  });

  return (
    <div>
      <ButtonList items={items} {...ButtonListProps} />
    </div>
  );
}
