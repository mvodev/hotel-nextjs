import DropdownRoomDefaultProps from 'src/components/DropdownRoom/DropdownRoomDefaultProps';

import type {
  Dates,
  Guests,
  Price,
  Rules,
  Availability,
  Conveniences,
  AdditionalConvenience,
  FiltersState,
} from './Types';

const dates: Dates = [null, null];

const guests: Guests = {
  adult: 0,
  child: 0,
  infants: 0,
};

const price: Price = {
  min: 0,
  max: 15000,
  from: 5000,
  to: 10000,
};

const rules: Rules = {
  maySmoking: {
    text: 'Можно курить',
    checked: false,
  },
  mayWithPets: {
    text: 'Можно с питомцами',
    checked: true,
  },
  mayInviteGuests: {
    text: `Можно пригласить гостей\n(до 10 человек)`,
    checked: true,
  },
};

const availability: Availability = {
  wideСorridor: {
    title: 'Широкий коридор',
    text: `Ширина коридоров в номере\nне менее 91 см.`,
    checked: false,
  },
  assistantForDisabled: {
    title: 'Помощник для инвалидов',
    text: `На 1 этаже вас встретит специалист\nи проводит до номера.`,
    checked: false,
  },
};

const [bedrooms, beds, bathrooms] = DropdownRoomDefaultProps.values;

const conveniences: Conveniences = {
  bedrooms,
  beds,
  bathrooms,
};

const additionalConvenience: AdditionalConvenience = {
  haveBreakfast: {
    text: 'Завтрак',
    checked: false,
  },
  haveDesk: {
    text: 'Письменный стол',
    checked: true,
  },
  haveFeedingChair: {
    text: 'Стул для кормления',
    checked: true,
  },
  haveCrib: {
    text: 'Кроватка',
    checked: true,
  },
  haveTV: {
    text: 'Телевизор',
    checked: false,
  },
  haveShampoo: {
    text: 'Шампунь',
    checked: false,
  },
};

const initialState: FiltersState = {
  dates,
  guests,
  price,
  rules,
  availability,
  conveniences,
  additionalConvenience,
};

export default initialState;
