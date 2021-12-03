import type { CheckboxButtonItemType } from 'src/components/CheckboxButtons/Types';
import type { DropdownRoomValue } from 'src/components/DropdownRoom/Types';

export type Dates = [null, null] | [string, string];

export type Guests = Record<'adults' | 'childs' | 'infants', number>;

export type Prices = Record<'min' | 'max' | 'from' | 'to', number>;

export type FieldsWithCheckboxes<T extends string> = Record<
  T,
  CheckboxButtonItemType
>;

export type RulesKeys = 'maySmoking' | 'mayWithPets' | 'mayInviteGuests';

export type Rules = FieldsWithCheckboxes<RulesKeys>;

export type AvailabilityKeys = 'wideСorridor' | 'assistantForDisabled';

export type Availability = FieldsWithCheckboxes<AvailabilityKeys>;

export type ConveniencesKeys = 'bedrooms' | 'beds' | 'bathrooms';

export type Conveniences = Record<ConveniencesKeys, DropdownRoomValue>;

export type AdditionalConvenienceKeys =
  | 'haveBreakfast'
  | 'haveDesk'
  | 'haveFeedingChair'
  | 'haveCrib'
  | 'haveTV'
  | 'haveShampoo';

export type AdditionalConvenience =
  FieldsWithCheckboxes<AdditionalConvenienceKeys>;

export type FiltersState = {
  dates: Dates;
  guests: Guests;
  prices: Prices;
  rules: Rules;
  availability: Availability;
  conveniences: Conveniences;
  additionalConvenience: AdditionalConvenience;
};
