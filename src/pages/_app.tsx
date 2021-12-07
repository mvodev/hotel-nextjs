import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { useDispatch } from 'react-redux';

import appActions from 'src/redux/Slices/App/AppActions';

import wrapper from '../redux/Store';
import '../styles/globals.sass';
import '../components/DatePicker/DatePicker.sass';

const MyApp = ({ Component }: AppProps): ReactElement => {
  const dispatch = useDispatch();
  dispatch(appActions.mount);

  return <Component />;
};

export default wrapper.withRedux(MyApp);
