import type { ReactElement } from 'react';
import Layout from '../components/Layout';
import firebaseAPI from '../firebaseAPI/firebaseAPI'


const Index = (): ReactElement => (
  <Layout title="landing page" pageClass="landing">
    {firebaseAPI.signIn('asdf@mail.ru', 'qazwsxedc')}
  </Layout>
);

export default Index;
