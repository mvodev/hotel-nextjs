import Calendar from 'react-calendar';
import Button from '../Button/Button';
import DatePickerType from './Types';

import 'react-calendar/dist/Calendar.css';

const DatePicker = ({
  initDates,
  disabledDates,
  isSmall = false,
  onChangeDate,
  onControlPanelUsed,
}: DatePickerType): JSX.Element => {
  const dateObject = new Date();
  const options = { year: 'numeric', month: 'long' };

  const minDate = new Date(
    dateObject.getFullYear(),
    dateObject.getMonth(),
    dateObject.getDate()
  );

  const formate = (locale: string, date: Date) =>
    date
      .toLocaleString('ru', options as Intl.DateTimeFormatOptions)
      .slice(0, -3);

  const handleCleanButtonClick = () => {
    onControlPanelUsed('clean');
  };
  const handleApplyButtonClick = () => onControlPanelUsed('apply');

  const datePickerClass = `date-picker ${isSmall ? 'date-picker_small' : ''}`;

  return (
    <div className={datePickerClass}>
      <div className='date-picker__calendar'>
        <Calendar
          locale="ru"
          value={initDates}
          selectRange
          onChange={onChangeDate}
          prevLabel=''
          nextLabel=''
          formatMonthYear={formate}
          minDate={minDate}
          tileDisabled={(options) => {
            const result = disabledDates.filter((item) => 
              item === options.date.getTime()
            )
            if (result.length) return true
            else return false
          }}
        />
      </div>
      <div className='date-picker__control-panel'>
        <Button
          type="button"
          text="очистить"
          onClick={handleCleanButtonClick}
        />
        <Button
          type="button"
          text="применить"
          onClick={handleApplyButtonClick}
        />
      </div>
    </div>
  );
};

export default DatePicker;
