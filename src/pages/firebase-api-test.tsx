import type { ReactElement } from 'react';
import Layout from '../components/Layout';
import firebaseAPI from '../firebaseAPI/firebaseAPI'


const Index = (): ReactElement => (
  <Layout title="landing page" pageClass="landing">
    {
      console.log(firebaseAPI.signUp({
        email: 'dxcgfghcffgxjxfgxgffbx@mail.ru',
        password: 'lkjhgfdsa',
        name: 'Name4',
        surname: 'Surname4',
        photo: '',
        gender: 'man',
        birthday: new Date(1979, 3, 18)
      }))
    }
  </Layout>
);

export default Index;
