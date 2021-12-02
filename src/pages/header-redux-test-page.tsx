import type { ReactElement } from 'react';
import React from 'react';
import HeaderButton from './headerReduxButton';
import Layout from '../components/Layout';

const HeaderRedux = (): ReactElement => (
  <Layout title='header-redux-test-page' pageClass='search'>
    <div style={{display:'flex',justifyContent:'center'}}>
      <HeaderButton/>
    </div>
  </Layout>
);


export default HeaderRedux;
