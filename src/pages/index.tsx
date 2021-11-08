import type { ReactElement } from 'react';
import DropdownGuests from '../components/DropdownGuests/DropdownGuests';
import DropdownGuestsDefaultProps from '../components/DropdownGuests/DropdownGuestsDefaultProps';

const Index = (): ReactElement => (

    <DropdownGuests value={DropdownGuestsDefaultProps.value} placeholder={DropdownGuestsDefaultProps.placeholder} opened={DropdownGuestsDefaultProps.opened}/>
);

export default Index;
