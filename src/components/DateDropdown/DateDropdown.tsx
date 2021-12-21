import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectDates, setDates } from 'src/redux/Filters/FiltersSlice';

import DatePicker from '../DatePicker/DatePicker';
import DateDropdownType from './Types';

import style from './DateDropdown.module.sass';
import { CHECK_BOOKING_BLOCKED } from 'src/redux/CurrentRoom/Types';

const DateDropdown = ({
  titles = ['прибытие', 'выезд'],
  modifier = 'double',
  isSmall = false,
  from = 'filtersCard',
  disabledDates = [],
}: DateDropdownType): JSX.Element => {
  const dates = useSelector(selectDates);
  const value: [Date, Date] | [null, null] = (dates[0] !== null) 
    ? (dates.map((item) => new Date(item)) as [Date, Date])
    : [null, null] 
  
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const getValueForDoubleField = (date: Date): string => {
    if (date === null) return '';
    const options = { day: '2-digit', month: 'numeric', year: 'numeric' };
    return date.toLocaleString('ru', options as Intl.DateTimeFormatOptions);
  };

  const getValueForSingleField = (date: [Date, Date]): string => {
    if (date[0] === null) return '';
    const options = { day: '2-digit', month: 'short' };

    const dateInString = date.map((item) =>
      item
        .toLocaleString('ru', options as Intl.DateTimeFormatOptions)
        .slice(0, -1)
    );

    return `${dateInString[0]} - ${dateInString[1]}`;
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const { target } = event;

    if (!(target as Element).closest(`.${style.dateDropdown}`)) {
      setIsOpen(false);
      window.removeEventListener('click', handleOutsideClick);
    }
  };

  const handleFieldClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) window.addEventListener('click', handleOutsideClick);
  };

  const getContainer = (title: string, date: Date | [Date, Date]) => (
    <div className={style.dateDropdownContainer}>
      <h3 className={style.dateDropdownTitle}>{title}</h3>
      <input
        value={
          modifier === 'double'
            ? getValueForDoubleField(date as Date)
            : getValueForSingleField(date as [Date, Date])
        }
        onClick={handleFieldClick}
        type='text'
        className={style.dateDropdownField}
        placeholder='ДД.ММ.ГГГГ'
        readOnly
      />
    </div>
  );

  const handleChangeDate = (dates: [Date, Date]) => {
    const newDates = (dates.map((item) => item.getTime()) as [number, number])
    dispatch(setDates(newDates));
    if (from === 'bookingCard') dispatch({ type: CHECK_BOOKING_BLOCKED })
  }

  const handleControlPanelUsedByFiltersCard = (buttonType: string) => {
    if (buttonType === 'clean') dispatch(setDates([null, null]));
    dispatch({ type: 'UPDATE_ROOMS', payload: 1 });
    setIsOpen(false);  
  }

  const handleControlPanelUsedByNotFiltersCard = (buttonType: string) => {
    if (buttonType === 'clean') dispatch(setDates([null, null]));
    setIsOpen(false);
  }

  const handleControlPanelUsed = (from === 'filtersCard')
    ? handleControlPanelUsedByFiltersCard
    : handleControlPanelUsedByNotFiltersCard


  const dropdownClass = `${style.dateDropdown} ${
    modifier === 'single' ? style.dateDropdownSingle : ''
  }`;

  const datePickerClass = `${style.dateDropdownDatePicker} ${
    isOpen ? style.dateDropdownDatePickerOpen : ''
  }`;

  return (
    <div className={dropdownClass}>
      {modifier === 'double'
        ? getContainer(titles[0], value[0] as Date)
        : getContainer(titles[0], value as [Date, Date])}

      {modifier === 'double'
        ? getContainer(titles[1] as string, value[1] as Date)
        : ''}

      <div className={datePickerClass}>
        <DatePicker
          initDates={value as Date[]}
          onChangeDate={handleChangeDate}
          onControlPanelUsed={handleControlPanelUsed}
          isSmall={isSmall}
          disabledDates = {disabledDates}
        />
      </div>
    </div>
  );
};

export default DateDropdown;
