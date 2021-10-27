import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import '../styles/globals.sass';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
};

function MyApp({ Component }: AppPropsWithLayout): ReactNode {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component />);
}

export default MyApp;
