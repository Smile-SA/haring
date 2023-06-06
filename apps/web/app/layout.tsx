import type { ReactNode } from 'react';

interface IRootLayoutProps {
  children: ReactNode;
}

export default function RootLayout(props: IRootLayoutProps): JSX.Element {
  const { children } = props;
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
