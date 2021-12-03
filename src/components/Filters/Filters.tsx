/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectConveniences,
  setConveniences,
} from 'src/redux/Slices/Filters/FiltersSlice';

import style from './Filters.module.sass';
import type FiltersType from './Types';
import CheckboxButtons from '../CheckboxButtons/CheckboxButtons';
import DateDropdown from '../DateDropdown/DateDropdown';
import DropdownGuests from '../DropdownGuests/DropdownGuests';
import DropdownRoom from '../DropdownRoom/DropdownRoom';
import DropdownRoomDefaultProps from '../DropdownRoom/DropdownRoomDefaultProps';
import type { DropdownRoomValue } from '../DropdownRoom/Types';
import RangeSlider from '../RangeSlider/RangeSlider';
import ExpandableList from '../ExpandableList/ExpandableList';

const Filters = ({
  dropdownGuests,
  checkboxButtons,
  richCheckboxButtons,
  expandableList,
}: FiltersType): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const conveniences = useSelector(selectConveniences);
  const dispatch = useDispatch();

  const handleFiltersButtonClick = () => setIsOpen(!isOpen);

  const handleDropdownRoomChange = (values: DropdownRoomValue[]) => {
    const [bedrooms, beds, bathrooms] = values.map(({ value }) => value);
    dispatch(setConveniences({ bedrooms, beds, bathrooms }));
  };

  return (
    <div className={[style.filters, isOpen ? style.filtersOpen : ''].join(' ')}>
      <button
        type='button'
        className={style.filtersButton}
        onClick={handleFiltersButtonClick}
      />
      <div className={style.filtersDate}>
        <DateDropdown
          titles={['даты пребывания в отеле']}
          modifier='single'
          isSmall
        />
      </div>
      <div className={style.filtersGuests}>
        <h2 className={style.filtersGuestsTitle}>гости</h2>
        <DropdownGuests
          placeholder='Сколько гостей'
          opened={false}
          value={dropdownGuests.value}
        />
      </div>
      <div className={style.filtersPrice}>
        <RangeSlider />
        <p className={style.filtersPriceText}>
          Стоимость за сутки пребывания в номере
        </p>
      </div>
      <div className={style.filtersRules}>
        <CheckboxButtons
          title='правила дома'
          isRich={false}
          items={checkboxButtons.items}
        />
      </div>
      <div className={style.filtersAvailability}>
        <CheckboxButtons
          title='доступность'
          isRich
          items={richCheckboxButtons.items}
        />
      </div>
      <div className={style.filtersConveniences}>
        <h2 className={style.filtersConveniencesTitle}>удобства номера</h2>
        <DropdownRoom
          placeholder={DropdownRoomDefaultProps.placeholder}
          values={DropdownRoomDefaultProps.values}
          handleCountersChange={handleDropdownRoomChange}
        />
      </div>
      <div className={style.filtersAdditionalConveniences}>
        <ExpandableList text='дополнительные удобства'>
          <CheckboxButtons
            title=''
            isRich={false}
            items={expandableList.items}
          />
        </ExpandableList>
      </div>
    </div>
  );
};

export default Filters;
