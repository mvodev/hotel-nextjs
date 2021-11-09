import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import wrapper from '../redux/store';

import '../styles/globals.sass';
import '../components/DatePicker/DatePicker.sass';

const MyApp = ({ Component }: AppProps): ReactElement => <Component />;
export default wrapper.withRedux(MyApp);
