import type { ReactElement, ReactNode } from 'react';

import { Provider, mainTheme } from '@smile/react-front-kit';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--rfk-font',
});

export interface IRootLayoutProps {
  children: ReactNode;
}

export default function RootLayout(props: IRootLayoutProps): ReactElement {
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
