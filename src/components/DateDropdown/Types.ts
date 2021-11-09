type DateDropdownType = {
  titles: [string] | [string, string];
  modifier: 'single' | 'double';
  initDate: [Date, Date] | [null, null];
};

export default DateDropdownType;
