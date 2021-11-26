type Dates = [null, null] | [string, string];

type Guests = {
  adults: number;
  childs: number;
  infants: number;
};

type FiltersState = {
  dates: Dates;
  guests: Guests;
};

export type { Dates, Guests, FiltersState };
