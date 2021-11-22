import type { ReactElement } from 'react';
import Layout from '../components/Layout';
import Filters from '../components/Filters/Filters';
import DropdownGuestsDefaultProps from '../components/DropdownGuests/DropdownGuestsDefaultProps';
import DropdownRoomDefaultProps from '../components/DropdownRoom/DropdownRoomDefaultProps';

const filtersProps = {
  dateDropdown: {
    initDate: [new Date(2022, 7, 19), new Date(2022, 7, 23)],
    titles: ['даты пребывания в отеле'] as [string],
    modifier: 'single',
  },
  dropdownGuests: DropdownGuestsDefaultProps,
  rangeSlider: {
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
    step: 100,
  },
  checkboxButtons: {
    isRich: false,
    title: 'правила дома',
    items: [
      {
        text: 'Можно курить',
        checked: false,
      },
      {
        text: 'Можно с питомцами',
        checked: true,
      },
      {
        text: 'Можно пригласить гостей (до 10 человек)',
        checked: true,
      },
    ],
  },
  richCheckboxButtons: {
    isRich: true,
    title: 'доступность',
    items: [
      {
        title: 'Широкий коридор',
        text: 'Ширина коридоров в номере не менее 91 см.',
        checked: false,
      },
      {
        title: 'Помощник для инвалидов',
        text: 'На 1 этаже вас встретит специалист  и проводит до номера.',
        checked: false,
      },
    ],
  },
  dropdownRoom: DropdownRoomDefaultProps,
  expandableList: {
    isRich: false,
    title: '',
    items: [
      {
        text: 'Завтрак',
        checked: false,
      },
      {
        text: 'Письменный стол',
        checked: true,
      },
      {
        text: 'Стул для кормления',
        checked: true,
      },
      {
        text: 'Кроватка',
        checked: true,
      },
      {
        text: 'Телевизор',
        checked: false,
      },
      {
        text: 'Шампунь',
        checked: false,
      },
    ],
  },
};

const Index = (): ReactElement => (
  <Layout title='landing page' pageClass='landing'>
    <div className='container'>
      <Filters {...filtersProps} />
    </div>

    <style jsx>{`
      .container {
        max-width: 1190px;
        width: 100%;
        padding: 0 15px;
        margin: auto;
      }
    `}</style>
  </Layout>
);

export default Index;
