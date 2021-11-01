import type { ReactElement } from 'react';

import Layout from '../components/Layout';
import DropdownGuests from '../components/dropdown-guests/DropdownGuests';

const Index = (): ReactElement => (
  <Layout title='test page dropdownGuests' pageClass='landing'>
    <DropdownGuests
      value={{
        adult: 1,
        child: 2,
        infants: 1,
      }}
      placeholder='Сколько гостей'
      opened={false}
    />
  </Layout>
);

export default Index;
