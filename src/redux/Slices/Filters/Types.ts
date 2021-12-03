import type { CheckboxButtonItemType } from 'src/components/CheckboxButtons/Types';
import type { DropdownRoomValue } from 'src/components/DropdownRoom/Types';

type Dates = [null, null] | [string, string];

type Guests = {
  adults: number;
  childs: number;
  infants: number;
};

type Prices = [number, number];

type Rules = {
  maySmoking: CheckboxButtonItemType;
  mayWithPets: CheckboxButtonItemType;
  mayInviteGuests: CheckboxButtonItemType;
};

type Availability = {
  wideСorridor: CheckboxButtonItemType;
  assistantForDisabled: CheckboxButtonItemType;
};

type Conveniences = {
  bedrooms: DropdownRoomValue;
  beds: DropdownRoomValue;
  bathrooms: DropdownRoomValue;
};

type AdditionalConvenience = {
  haveBreakfast: CheckboxButtonItemType;
  haveDesk: CheckboxButtonItemType;
  haveFeedingChair: CheckboxButtonItemType;
  haveCrib: CheckboxButtonItemType;
  haveTV: CheckboxButtonItemType;
  haveShampoo: CheckboxButtonItemType;
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
  CheckboxButtonItemType,
  Rules,
  Availability,
  Conveniences,
  AdditionalConvenience,
  FiltersState,
};
