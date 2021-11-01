import type { ReactElement } from 'react';
import DateDropdown from '../components/date-dropdown/date-dropdown';

import Layout from '../components/Layout';

const Index = (): ReactElement => (
  <Layout title='landing page' pageClass='landing'>
    <div className="container">
      <div className="first-dropdown">
        <DateDropdown
          initDate = { [new Date(2021, 11, 12), new Date(2021, 11, 25)] }
          modifier = 'double'
        />
      </div>
      <div className="second-dropdown">
        <DateDropdown
          initDate = { [new Date(2021, 11, 12), new Date(2021, 11, 25)] }
          modifier = 'single'
        />
      </div>
    </div>

    <style jsx>{`
      .container{
        max-width: 320px;
        width: 100%;
      }

      .first-dropdown, .second-dropdown{
        width: 100%;
      }

      .second-dropdown{
        margin-top: 150px;
      }
    
    `}</style>
    
    
  </Layout>
);

export default Index;
