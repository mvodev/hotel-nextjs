/* eslint-disable react/prop-types */
import { Component } from 'react';
import DatePicker from "../date-picker/date-picker";

import style from './date-dropdown.module.sass'

type DateDropdownType = {
  titles: [string] | [string, string],
  modifier: 'single' | 'double',
  initDate: [Date, Date] | [null, null],
}

class DateDropdown extends Component {
  private titles: [string] | [string, string];

  private modifier: string;

  constructor(props: DateDropdownType) {
    super(props);
    const { initDate = [null, null], titles = ['прибытие', 'выезд'], modifier = 'double' } = props; 
    this.state = { value: initDate, isOpen: false } 
    this.titles = titles;
    this.modifier = modifier;
  }

  private getValueForDoubleField = (date: Date): string => {
    if (date === null) return ''
    const options = { day: '2-digit', month: 'numeric', year: 'numeric' };
    return date.toLocaleString('ru', options as Intl.DateTimeFormatOptions);
  }

  private getValueForSingleField = (date: [Date, Date]): string => {
    if (date[0] === null) return '';
    const options = { day: '2-digit', month: 'short' };

    const dateInString = date.map((item) => (
      item.toLocaleString('ru', options as Intl.DateTimeFormatOptions).slice(0, -1))
    );

    return `${dateInString[0]} - ${dateInString[1]}`;
  }

  private getContainer = (title: string, date: Date | [Date, Date], modifier: string) => (
    <div className = { style['date-dropdown__container'] }>
      <h3 className= { style['date-dropdown__title'] }>{ title }</h3>
      <input 
        value={
          (modifier === 'double') 
            ? this.getValueForDoubleField(date as Date) 
            : this.getValueForSingleField(date as [Date, Date])
        }
        onClick={this.handleFieldClick} 
        type="text" 
        className={ style['date-dropdown__field'] }
        placeholder = "ДД.ММ.ГГГГ" 
        readOnly 
      />
    </div>
  )

  private handleChangeDate = (dates: Date[]): void => {
    this.setState({ value: dates })
  }

  private handleControlPanelUsed = (buttonType: string): void => {
    if (buttonType === 'clean') this.setState({ value: [null, null], isOpen: false })
    else this.setState({ isOpen: false });
  }

  private handleFieldClick = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
    if (!this.state.isOpen) {
      window.addEventListener('click', this.handleOutsideClick);
    }
  }

  private handleOutsideClick = (event: MouseEvent) => {
    const { target } = event

    if (!(target as EventTarget).closest('.date-dropdown_date-dropdown__h9gkE')) {
      this.setState({ isOpen: false });
      window.removeEventListener('click', this.handleOutsideClick);
    }
  }

  render() {
    const { value, isOpen } = this.state;
    const { titles, modifier } = this;

    const dropdownClass = `${style['date-dropdown']} ${(modifier === 'single') 
      ? style['date-dropdown_single'] 
      : ''
    }`;

    const datePickerClass =  `${ style['date-dropdown__date-picker'] } ${isOpen
      ? style['date-dropdown__date-picker_open']
      : ''
    }`;

    return(
      <div className={dropdownClass}>
        { 
          (modifier === 'double') 
            ? this.getContainer(titles[0], value[0], modifier)
            : this.getContainer(titles[0], value, modifier)
        }

        { 
          (modifier === 'double') 
            ? this.getContainer((titles as [string, string])[1], value[1], modifier) 
            : ''
        }

        <div className = { datePickerClass }>
          <DatePicker 
            initDates = { value }
            onChangeDate = { this.handleChangeDate }
            onControlPanelUsed = { this.handleControlPanelUsed }
          />
        </div>
      </div>
    );
  }
}

export default DateDropdown;