import type { Dates, Guests, FiltersState } from './Types';

const dates: Dates = [null, null];

const guests: Guests = {
  adults: 0,
  childs: 0,
  infants: 0,
};

const initialState: FiltersState = {
  prices: {
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
  },
  dates,
  guests,
};

export default initialState;
