import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.sass';
import '../components/DatePicker/DatePicker.sass';

const MyApp = ({ Component }: AppProps): ReactElement => <Component />;

export default MyApp;
