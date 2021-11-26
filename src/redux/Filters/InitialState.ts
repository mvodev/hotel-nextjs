import type { Dates, Guests, FiltersState } from './Types';

const dates: Dates = [null, null];

const guests: Guests = {
  adults: 0,
  childs: 0,
  infants: 0,
}

const initialState: FiltersState = {
  dates,
  guests
};

export default initialState;
