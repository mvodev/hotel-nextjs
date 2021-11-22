type DatePickerType = {
  initDates: Date[];
  isSmall: boolean;
  onChangeDate: (dates: [Date, Date]) => void;
  onControlPanelUsed: (buttonType: string) => void;
};

export default DatePickerType;
