import type { ReactElement } from 'react';
import { RoomType } from 'src/firebaseAPI/Types';
import Layout from '../components/Layout';
import firebaseAPI from '../firebaseAPI/firebaseAPI';

const Index = (): ReactElement => (
  <Layout title='landing page' pageClass='landing'>
    {
      firebaseAPI.cancelBooking(
        'zJZTRBZf4buT9NgFOhYo',
        'IG7ubL3aaVAewkXLryzy',
        [1641927600000, 1642532399000]
      )
    }
  </Layout>
);

export default Index;
