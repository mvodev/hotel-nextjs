import type { ReactElement } from 'react';
import impressionsDefaultProps from 'src/components/Impressions/ImpressionsDefaultProps';
import Impressions from '../components/Impressions/Impressions';

const Index = (): ReactElement => (
  <div style={{margin:'50px'}}>
    <Impressions {...impressionsDefaultProps}/>
  </div>
);

export default Index;
