import type {
  Dates,
  Guests,
  Prices,
  Conveniences,
  FiltersState,
} from './Types';

const dates: Dates = [null, null];

const guests: Guests = {
  adults: 0,
  childs: 0,
  infants: 0,
};

const prices: Prices = {
  min: 0,
  max: 15000,
  from: 5000,
  to: 10000,
};

const conveniences: Conveniences = {
  bedrooms: 2,
  beds: 2,
  bathrooms: 0,
};

const initialState: FiltersState = {
  dates,
  guests,
  prices,
  conveniences,
};

export default initialState;
