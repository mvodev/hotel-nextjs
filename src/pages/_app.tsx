import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { useDispatch } from 'react-redux';

import appActions from 'src/redux/App/AppActions';

import wrapper from '../redux/Store';
import '../styles/globals.sass';
import '../components/DatePicker/DatePicker.sass';

// eslint-disable-next-line arrow-body-style
const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  const dispatch = useDispatch();
  dispatch(appActions.mount);

  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
