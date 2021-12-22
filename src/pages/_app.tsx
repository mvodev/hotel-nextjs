import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useDispatch } from 'react-redux';

import appActions from 'src/redux/App/AppActions';

import wrapper from '../redux/Store';
import '../styles/globals.sass';
import '../components/DatePicker/DatePicker.sass';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.mount);
  });

  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
