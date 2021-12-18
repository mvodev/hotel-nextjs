import { ReactElement, PropsWithChildren, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { USER_AUTHENTICATE } from 'src/redux/Authentication/Types';

import Head from 'next/head';
import { AppState } from 'src/redux/Store';
import Header from './Header/Header';
import HeaderDefaultProps from './Header/HeaderDefaultProps';
import Footer from './Footer/Footer';
import ModalWindow from './ModalWindow/ModalWindow';

interface ILayoutProps {
  pageClass: string;
  title?: string;
}

const Layout = ({
  children,
  pageClass,
  title = 'toxin page',
}: PropsWithChildren<ILayoutProps>): ReactElement => {

  const [isCookies, setCookies] = useState(false);

  const dispatch = useDispatch();

  const { isAuthenticated } = {
    ...useSelector((state: AppState) => state.Authentication),
  };

  useEffect(() => {
    if (!isCookies) {
      setCookies(true);
      dispatch({ type: USER_AUTHENTICATE });
    }
  }, [isCookies, dispatch]);

  const router = useRouter();
  const routeIsPossible = router.pathname==='/'
    ||router.pathname==='/signIn'
    ||router.pathname==='/registration';

  const handleModalWindowClose = ()=>{
    router.push('/');
  }

    const modalWindow = (!isAuthenticated && !routeIsPossible)?
      <ModalWindow 
        title="Пожалуйста авторизуйтесь!" 
        text="Пожалуйста авторизуйтесь для перехода на данную страницу."
        isEnabled
        handleCloseClick={handleModalWindowClose}
      />
      :null;

  return (
    <>
      {modalWindow}
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='mask-icon' href='/favicons/mask-icon.svg' color='#BC9CFF' />
        <link rel='icon' type='image/jpg' href='/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/jpg' href='/favicons/favicon-16x16.png' />
      </Head>
      <Header {...HeaderDefaultProps} />
      <main className={pageClass}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
