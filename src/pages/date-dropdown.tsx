import type { ReactElement } from 'react';
import DateDropdown from '../components/date-dropdown/date-dropdown';

import Layout from '../components/Layout';

const Index = (): ReactElement => (
  <Layout title='landing page' pageClass='landing'>
    <DateDropdown
      initDate = { [new Date(2021, 11, 12), new Date(2021, 11, 25)] }
      modifier = 'double'
    />
    <DateDropdown
      initDate = { [new Date(2021, 11, 12), new Date(2021, 11, 25)] }
      modifier = 'single'
    />
  </Layout>
);

export default Index;
