type DateDropdownType = {
  titles: [string] | [string, string];
  modifier: 'single' | 'double';
  initDate: [Date, Date] | [null, null];
  isSmall: boolean;
};

export default DateDropdownType;
