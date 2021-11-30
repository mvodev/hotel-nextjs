type Dates = [null, null] | [string, string];

type Guests = {
  adults: number;
  childs: number;
  infants: number;
};

type Prices = {
  min: number;
  max: number;
  from: number;
  to: number;
}

type FiltersState = {
  dates: Dates;
  guests: Guests;
  prices: Prices;
};

export type {
  Dates,
  Guests,
  Prices,
  FiltersState 
};
