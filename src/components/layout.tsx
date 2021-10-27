import Head from 'next/head'
import Header from './header/header';
import Footer from './footer/footer';

interface ILayoutProps {
  children: React.ReactNode
  pageClass: string
  title?: string
}

const Layout = (
  { children, pageClass, title = 'toxin page' }: ILayoutProps
) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className={pageClass}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

