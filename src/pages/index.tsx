import type { ReactElement } from 'react';
import Button from '../components/button/button';

import Layout from '../components/Layout';

const Index = (): ReactElement => (
  <div>
    <div style={{ padding: '10px' }}>
      <Button />
    </div>
    <div style={{ padding: '10px' }}>
      <Button size='fixed' theme='bordered' />
    </div>
    <div style={{ padding: '10px' }}>
      <Button size='fixed' theme='filled' />
    </div>
    <div style={{ padding: '10px', width: '200px' }}>
      <Button size='small' theme='bordered' />
    </div>
    <div style={{ padding: '10px', width: '200px' }}>
      <Button size='small' theme='filled' />
    </div>
    <div style={{ padding: '10px' }}>
      <Button size='fixed' theme='rounded' />
    </div>
  </div>
);

export default Index;
