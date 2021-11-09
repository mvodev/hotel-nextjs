import type { ReactElement, PropsWithChildren } from 'react';
import Head from 'next/head';

import Header from './Header/Header';
import HeaderDefaultProps from './Header/HeaderDefaultProps';

interface ILayoutProps {
  pageClass: string;
  title?: string;
}

const Layout = ({
  children,
  pageClass,
  title = 'toxin page',
}: PropsWithChildren<ILayoutProps>): ReactElement => (
  <>
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='mask-icon' href='/favicons/mask-icon.svg' color='#BC9CFF' />
      <link rel='icon' type='image/jpg' href='/favicons/favicon-32x32.png' />
      <link rel='icon' type='image/jpg' href='/favicons/favicon-16x16.png' />
    </Head>
    <Header {...HeaderDefaultProps} />
    <main className={pageClass}>{children}</main>
  </>
);

export default Layout;