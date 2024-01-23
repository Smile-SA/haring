'use client';

import type { IButtonListOrDropdownProps } from '../ButtonListOrDropdown/ButtonListOrDropdown';
import type { IItems, IOption } from '@smile/react-front-kit-shared';
import type { ReactElement } from 'react';

import { createStyles } from '@mantine/styles';

import { ButtonListOrDropdown } from '../ButtonListOrDropdown/ButtonListOrDropdown';

export interface ILang extends IOption<string> {
  flag?: string;
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

  function returnItems(langs: ILang[]): IItems<string> {
    return langs.map((index) => {
      return {
        content: (
          <>
            <i
              className={`fi fi-${index.flag} ${squareFormat && 'fis'} ${
                Boolean(index.label) && classes.flag
              }`}
            />
            {index.label}
          </>
        ),
        label: index.label,
        value: index.value,
      };
    });
  }

  return (
    <div>
      <ButtonListOrDropdown
        items={returnItems(langs)}
        {...ButtonListOrDropdownProps}
      />
    </div>
  );
}
