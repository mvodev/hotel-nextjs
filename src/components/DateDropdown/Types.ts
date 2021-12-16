type DateDropdownType = {
  titles?: [string] | [string, string];
  modifier?: 'single' | 'double';
  isSmall?: boolean;
  from: 'filtersCard' | 'searchCard' | 'bookingCard';
  disabledDates: number[];
};

export default DateDropdownType;
