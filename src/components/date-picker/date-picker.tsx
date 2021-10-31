import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface IDate { year: number, month: number, day: number }
interface IInitDates { from: IDate, to: IDate }
interface IDatePicker { initDates: Date[], onChangeDate: (dates: Date[]) => void }

const DatePicker = (props: IDatePicker): JSX.Element => {
  const initDates = props.initDates;
  //const onChangeDate = props.onChangeDate;
  const onChangeDate = (dates) => console.log(dates);
  const date = new Date();
  const minDate = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
  const options = {
    year: 'numeric',
    month: 'long'
  };
  const formate = (locale, date) => date.toLocaleString("ru", options).slice(0, -3)

  return (
    <div className="date-picker">
      <div className="date-picker__calendar">
        <Calendar
          locale="ru"
          defaultValue={initDates}
          selectRange={ true }
          onChange={onChangeDate}
          prevLabel=""
          nextLabel=""
          formatMonthYear={formate}
          minDate={minDate}
        />
      </div>
      <div className="date-picker__control-panel">
        <botton> очистить </botton>
        <botton>причинить</botton>
      </div>
    </div>
    
  );
}

export default DatePicker;
