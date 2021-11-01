/* eslint-disable react/prop-types */
import React from "react";
import DatePicker from "../date-picker/date-picker";

interface IDateDropdown {
    titles: [string] | [string, string],
    modifier: 'single' | 'double',
    initDate: [Date, Date] | [null, null],
}

class DateDropdown extends React.Component {
  constructor(props: IDateDropdown) {
    super(props);
    const { initDate = [null, null], titles = ['прибытие', 'выезд'], modifier = 'double' } = props   
    this.state = { value: initDate, titles, modifier } 
  }

  private getValueForDoubleField = (date: Date): string => {
    if (date === null) return ''
    const options = { day: '2-digit', month: 'numeric', year: 'numeric' };
    return date.toLocaleString('ru', options as Intl.DateTimeFormatOptions);
  }

  private getValueForSingleField = (date: [Date, Date]): string => {
    if (date[0] === null) return ''
    const options = { day: '2-digit', month: 'short' };
    const dateInString = date.map((item) => (
      item.toLocaleString('ru', options as Intl.DateTimeFormatOptions).slice(0, -1))
    );
    return `${dateInString[0]} - ${dateInString[1]}`;
  }

  private getContainer = (title: string, date: Date | [Date, Date], modifier: string) => (
    <div className="date-dropdown__container">
      <h3 className="date-dropdown__title">{title}</h3>
      <input 
        value={
          (modifier === 'double') 
            ? this.getValueForDoubleField(date as Date) 
            : this.getValueForSingleField(date as [Date, Date])
        } 
        type="text" 
        className="date-dropdown__field" 
        placeholder = "ДД.ММ.ГГГГ" 
        readOnly 
      />
    </div>
  )

  private handleChangeDate = (dates: Date[]): void => {
    this.setState({ value: dates })
  }

  private handleControlPanelUsed = (buttonType: string): void => {
    if (buttonType === 'clean') {
      this.setState({ value: [null, null] })
    }
  }

  render() {
    const { titles, modifier, value } = this.state;
    const dropdownClass = `date-dropdown date-dropdown_${ modifier }`;

    return(
      <div className={dropdownClass}>
        { 
          (modifier === 'double') 
            ? this.getContainer(titles[0], value[0], modifier)
            : this.getContainer(titles[0], value, modifier)
        }
        { (modifier === 'double') ? this.getContainer(titles[1], value[1], modifier) : ''}
        <div className = "date-dropdown__date-picker">
          <DatePicker 
            initDates = {value}
            onChangeDate = {this.handleChangeDate}
            onControlPanelUsed = {this.handleControlPanelUsed}
          />
        </div>
      </div>
    );
  }
}

export default DateDropdown;