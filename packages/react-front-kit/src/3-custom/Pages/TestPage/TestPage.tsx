import { AppShell, Button, Header, useMantineTheme } from '@mantine/core';

/**
 * Primary UI component for user interaction
 */
export function TestPage(): JSX.Element {
  const theme = useMantineTheme();

  return (
    <AppShell
      header={
        <Header height={89} withBorder={false}>
          <Button>Mon espace</Button>
        </Header>
      }
      style={{ background: theme.colors.gray[1] }}
    >
      content
    </AppShell>
  );
}
