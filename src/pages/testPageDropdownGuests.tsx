import type { ReactElement } from 'react';

import DropdownGuests from '../components/DropdownGuests/DropdownGuests';

const Index = (): ReactElement => (
    <DropdownGuests
      value={{
        adult: 1,
        child: 2,
        infants: 1,
      }}
      placeholder='Сколько гостей'
      opened={false}
    />
);

export default Index;
