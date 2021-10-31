import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.sass';
import '../components/date-picker/date-picker.sass';

const MyApp = ({ Component }: AppProps): ReactElement => <Component />;

export default MyApp;
