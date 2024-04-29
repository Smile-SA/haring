import type { ReactElement, ReactNode } from 'react';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@smile/haring-react/style.css';
import '@smile/haring-react-dropzone/style.css';
import { Provider } from '@smile/haring-react-shared';
import '@smile/haring-react-shared/style.css';
import '@smile/haring-react-table/style.css';
import { Open_Sans } from 'next/font/google';
import 'storybook-pages/style.css';

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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
