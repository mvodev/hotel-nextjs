import type { DropdownRoomValue } from 'src/components/DropdownRoom/Types';

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
};

type Rules = {
  maySmoking: {
    text: string;
    checked: boolean;
  };
  mayWithPets: {
    text: string;
    checked: boolean;
  };
  mayInviteGuests: {
    text: string;
    checked: boolean;
  };
};

type Availability = {
  wideСorridor: {
    title: string;
    text: string;
    checked: boolean;
  };
  assistantForDisabled: {
    title: string;
    text: string;
    checked: boolean;
  };
};

type Conveniences = {
  bedrooms: DropdownRoomValue;
  beds: DropdownRoomValue;
  bathrooms: DropdownRoomValue;
};

type AdditionalConvenience = {
  haveBreakfast: {
    checked: boolean;
    text: string;
  };
  haveDesk: {
    checked: boolean;
    text: string;
  };
  haveFeedingChair: {
    checked: boolean;
    text: string;
  };
  haveCrib: {
    checked: boolean;
    text: string;
  };
  haveTV: {
    checked: boolean;
    text: string;
  };
  haveShampoo: {
    checked: boolean;
    text: string;
  };
};

type FiltersState = {
  dates: Dates;
  guests: Guests;
  prices: Prices;
  rules: Rules;
  availability: Availability;
  conveniences: Conveniences;
  additionalConvenience: AdditionalConvenience;
};

export type {
  Dates,
  Guests,
  Prices,
  Rules,
  Conveniences,
  AdditionalConvenience,
  FiltersState,
};
