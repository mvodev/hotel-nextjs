/* eslint-disable jsx-a11y/control-has-associated-label */
import { ReactElement, useState } from 'react';
import style from './Filters.module.sass';
import CheckboxButtons from '../CheckboxButtons/CheckboxButtons';
import DateDropdown from '../DateDropdown/DateDropdown';
import DropdownGuests from '../DropdownGuests/DropdownGuests';
import DropdownRoom from '../DropdownRoom/DropdownRoom';
import RangeSlider from '../RangeSlider/RangeSlider';
import ExpandableList from '../ExpandableList/ExpandableList';
import type FiltersType from './Types';

const Filters = ({
  dateDropdown,
  dropdownGuests,
  rangeSlider,
  checkboxButtons,
  richCheckboxButtons,
  dropdownRoom,
  expandableList,
}: FiltersType): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFiltersButtonClick = () => setIsOpen(!isOpen);

  const filtersClass = `${style.filters} ${isOpen ? style.filtersOpen : ''}`;

  return (
    <div className={filtersClass}>
      <button
        type='button'
        className={style.filtersButton}
        onClick={handleFiltersButtonClick}
      />
      <div className={style.filtersDate}>
        <DateDropdown
          titles={['даты пребывания в отеле']}
          modifier='single'
          initDate={dateDropdown.initDate}
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
        <RangeSlider
          min={rangeSlider.min}
          max={rangeSlider.max}
          step={rangeSlider.step}
        />
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
        <DropdownRoom placeholder='' values={dropdownRoom.values} />
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
