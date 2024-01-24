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
  languages: ILang[];
  squareFormat?: boolean;
}

const useStyles = createStyles(() => ({
  flag: { marginRight: '5px' },
}));

export function MenuLang(props: IMenuLangProps): ReactElement {
  const {
    languages,
    squareFormat = false,
    ...ButtonListOrDropdownProps
  } = props;
  const { classes } = useStyles();

  const items = languages.map((language) => {
    const classNames = ['fi', `fi-${language.country?.toLowerCase()}`];
    if (squareFormat) {
      classNames.push('fis');
    }
    if (language.label) {
      classNames.push(classes.flag);
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
