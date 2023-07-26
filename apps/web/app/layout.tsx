import type { ReactNode } from 'react';

import { Open_Sans } from 'next/font/google';
import { Provider, mainTheme } from 'react-front-kit';

const openSans = Open_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--rfk-font',
});

interface IRootLayoutProps {
  children: ReactNode;
}

export default function RootLayout(props: IRootLayoutProps): JSX.Element {
  const { children } = props;
  return (
    <html className={openSans.variable} lang="en">
      <body>
        <Provider colorScheme="light" theme={mainTheme}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
