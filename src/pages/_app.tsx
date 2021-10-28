import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { createStore } from '@reduxjs/toolkit'
import withRedux from "next-redux-wrapper";

import reducers from "../redux/reducers/reduces";


import '../styles/globals.sass';

const MyApp = ({ Component }: AppProps): ReactElement => <Component />;




const initStore = () => createStore(reducers);

export default withRedux(initStore)(MyApp);
