import type { ReactElement } from 'react';
import { Form } from 'react-final-form';
import Layout from '../components/Layout';
import RadioButtons from '../components/RadioButtons/RadioButtons';

const state = {
  groupName: 'sex',
  items: [
    {
      id: 1,
      text: 'Мужчина',
      value: 'man',
      checked: true,
    },
    {
      id: 2,
      text: 'Женщина',
      value: 'woman',
      checked: false,
    },
  ],
};

const Index = (): ReactElement => (
  <Layout title='landing page' pageClass='landing'>
    <Form onSubmit={() => {}} render={() => <RadioButtons {...state} />} />
  </Layout>
);

export default Index;
