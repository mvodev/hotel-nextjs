type DatePickerType = {
  initDates: Date[];
  disabledDates: number[];
  isSmall: boolean;
  onChangeDate: (dates: [Date, Date]) => void;
  onControlPanelUsed: (buttonType: string) => void;
};

export default DatePickerType;
