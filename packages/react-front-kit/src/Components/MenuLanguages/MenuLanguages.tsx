'use client';

import type { IButtonListOrDropdownProps } from '../ButtonListOrDropdown/ButtonListOrDropdown';
import type { IOption } from '@smile/react-front-kit-shared';
import type { ReactElement } from 'react';

import { ButtonListOrDropdown } from '../ButtonListOrDropdown/ButtonListOrDropdown';

import classes from './MenuLanguages.module.css';

export interface ILang extends IOption<string> {
  country?: string;
}

export interface IMenuLanguagesProps
  extends Omit<IButtonListOrDropdownProps, 'items'> {
  languages: ILang[];
  squareFormat?: boolean;
}

export function MenuLanguages(props: IMenuLanguagesProps): ReactElement {
  const {
    languages,
    squareFormat = false,
    ...ButtonListOrDropdownProps
  } = props;

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
      <ButtonListOrDropdown items={items} {...ButtonListOrDropdownProps} />
    </div>
  );
}
