import type { ReactElement } from 'react';
import Button from '../components/button/button';

const ButtonComponent = (): ReactElement => (
  <div>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ padding: '15px' }}>
        <Button />
      </div>
      <div style={{ padding: '15px' }}>
        <Button isDisabled={true} />
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ padding: '15px' }}>
        <Button theme='bordered' size='fixed' />
      </div>
      <div style={{ padding: '15px' }}>
        <Button theme='bordered' size='fixed' isDisabled={true} />
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ padding: '15px' }}>
        <Button theme='filled' size='fixed' />
      </div>
      <div style={{ padding: '15px' }}>
        <Button theme='filled' size='fixed' isDisabled={true} />
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ padding: '15px', width: '300px' }}>
        <Button theme='filled' type='submit' />
      </div>
      <div style={{ padding: '15px', width: '300px' }}>
        <Button theme='filled' type='submit' isDisabled={true} />
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ padding: '15px' }}>
        <Button theme='rounded' text='+' />
      </div>
      <div style={{ padding: '15px' }}>
        <Button theme='rounded' text='+' isDisabled={true} />
      </div>
    </div>
  </div>
);

export default ButtonComponent;
