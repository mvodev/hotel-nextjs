type DatePickerType = {
  initDates: Date[];
  onChangeDate: (dates: [Date, Date]) => void;
  onControlPanelUsed: (buttonType: string) => void;
}

export default DatePickerType;