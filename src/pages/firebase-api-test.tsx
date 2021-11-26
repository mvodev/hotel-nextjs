import type { ReactElement } from 'react';
import Layout from '../components/Layout';
import firebaseAPI from '../firebaseAPI/firebaseAPI'


const Index = (): ReactElement => (
  <Layout title="landing page" pageClass="landing">
    {
      console.log(firebaseAPI.signUp({
        email: 'qazpoiuytrew@mail.ru',
        password: 'lkjhgfdsa',
        name: 'Name3',
        surname: 'Surname3',
        photo: '',
        gender: 'man',
        birthday: Date(1979, 3, 18)
      }))
    }
  </Layout>
);

export default Index;
