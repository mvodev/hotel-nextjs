import FiltersType from './Types';
import DropdownGuestsDefaultProps from '../DropdownGuests/DropdownGuestsDefaultProps';

const FiltersProps: FiltersType = {
  dateDropdown: {
    titles: ['даты пребывания в отеле'] as [string],
    modifier: 'single',
    isSmall: true,
  },
  dropdownGuests: DropdownGuestsDefaultProps,
  checkboxButtons: {
    isRich: false,
    title: 'правила дома',
    items: [
      {
        title: '',
        text: 'Можно курить',
        checked: false,
      },
      {
        title: '',
        text: 'Можно с питомцами',
        checked: true,
      },
      {
        title: '',
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
  expandableList: {
    isRich: false,
    title: '',
    items: [
      {
        title: '',
        text: 'Завтрак',
        checked: false,
      },
      {
        title: '',
        text: 'Письменный стол',
        checked: true,
      },
      {
        title: '',
        text: 'Стул для кормления',
        checked: true,
      },
      {
        title: '',
        text: 'Кроватка',
        checked: true,
      },
      {
        title: '',
        text: 'Телевизор',
        checked: false,
      },
      {
        title: '',
        text: 'Шампунь',
        checked: false,
      },
    ],
  },
};

export default FiltersProps;
