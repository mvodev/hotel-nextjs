import type { FiltersAPIType } from 'src/firebaseAPI/Types';

export type Filters = FiltersAPIType;

export type Dates = Filters['dates'];

export type Guests = Filters['guests'];

export type Price = Filters['price'];

export type Rules = Filters['rules'];

export type RulesKeys = keyof Rules;

export type Availability = Filters['availability'];

export type AvailabilityKeys = keyof Availability;

export type Conveniences = Filters['conveniences'];

export type ConveniencesKeys = keyof Conveniences;

export type AdditionalConvenience = Filters['additionalConvenience'];

export type AdditionalConvenienceKeys = keyof AdditionalConvenience;
