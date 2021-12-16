type DatePickerType = {
  initDates: Date[];
  disabledDates: Date[];
  isSmall: boolean;
  onChangeDate: (dates: [Date, Date]) => void;
  onControlPanelUsed: (buttonType: string) => void;
};

export default DatePickerType;
