import { Button } from '@mantine/core';
import { MagnifyingGlass } from '@phosphor-icons/react';

interface IHeaderSearchProps {
  height?: number;
  onChange?: (opened: boolean) => void;
  opened?: boolean;
}

export function HeaderSearch(props: IHeaderSearchProps): JSX.Element {
  const { height = 90, opened, onChange } = props;

  function handleClick(): void {
    onChange?.(!opened);
  }

  return (
    <Button
      onClick={handleClick}
      sx={(theme) => ({
        ...(!opened && {
          '&::after': {
            background: theme.colors.gray[3],
            content: '""',
            display: 'block',
            height: 36,
            position: 'absolute',
            right: 0,
            top: '50%',
            translate: '0 -50%',
            width: 1,
          },
        }),
        ...(opened && {
          background: theme.fn.primaryColor(),
          color: theme.white,
        }),
        borderRadius: 0,
        height,
        position: 'relative',
        width: height,
      })}
      variant="white"
    >
      <MagnifyingGlass size={32} />
    </Button>
  );
}
