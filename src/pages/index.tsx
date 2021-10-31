import type { ReactElement } from 'react';
import DatePicker from '../components/date-picker/date-picker'; 

import Layout from '../components/Layout';

const Index = (): ReactElement => (
  <Layout title='landing page' pageClass='landing'>
    <DatePicker initDates={ [new Date(2021, 10, 28), new Date(2021, 10, 30)] } />
  </Layout>
);

export default Index;
