import Calendar from 'react-calendar';
import Button from '../button/button';
import 'react-calendar/dist/Calendar.css';

type DatePickerType = {
  initDates: Date[];
  onChangeDate: (dates: [Date, Date]) => void;
  onControlPanelUsed: (buttonType: string) => void;
}

const DatePicker = (props: DatePickerType): JSX.Element => {
  const { initDates, onChangeDate, onControlPanelUsed } = props;
  const dateObject = new Date();
  const options = { year: 'numeric', month: 'long' };
  
  const minDate = new Date(
    dateObject.getFullYear(),
    dateObject.getMonth(),
    dateObject.getDate()
  );
  
  const formate = (locale: string, date: Date) => (
    date.toLocaleString('ru', options as Intl.DateTimeFormatOptions).slice(0, -3)
  );

  const handleCleanButtonClick = () => {
    onControlPanelUsed('clean');
    
  }
  const handleApplyButtonClick = () => onControlPanelUsed('apply');

  return (
    <div className='date-picker'>
      <div className='date-picker__calendar'>
        <Calendar
          locale='ru'
          value={initDates}
          selectRange
          onChange={onChangeDate}
          prevLabel=''
          nextLabel=''
          formatMonthYear={formate}
          minDate={minDate}
        />
      </div>
      <div className='date-picker__control-panel'>
        <Button text='очистить' onClick={handleCleanButtonClick} />
        <Button text='применить' onClick={handleApplyButtonClick} />
      </div>
    </div>
  );
};

export default DatePicker;
