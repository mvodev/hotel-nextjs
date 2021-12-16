type DateDropdownType = {
  titles?: [string] | [string, string];
  modifier?: 'single' | 'double';
  isSmall?: boolean;
  from: 'filtersCard' | 'searchCard' | 'bookingCard';
  disabledDates: Date[];
};

export default DateDropdownType;
