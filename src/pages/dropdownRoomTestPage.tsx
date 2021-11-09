import type { ReactElement } from 'react';
import DropdownRoom from '../components/DropdownRoom/DropdownRoom';

const Index = (): ReactElement => (
  <div style={{margin:'30px'}}>
  <DropdownRoom placeholder='2 спальни, 2 кровати' value = {{
    bedrooms: 2,
    beds: 2,
    bathrooms: 0,}
  }/>  
  </div>
);

export default Index;
