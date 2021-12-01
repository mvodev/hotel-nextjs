type Dates = [null, null] | [string, string];

type Guests = {
  adults: number;
  childs: number;
  infants: number;
};

type FiltersState = {
  dates: Dates;
  guests: Guests;
  isUpdated: boolean;
};

export type { Dates, Guests, FiltersState };
