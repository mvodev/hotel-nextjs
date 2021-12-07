import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setRules,
  selectRules,
  setAvailability,
  selectAvailability,
  setConveniences,
  selectConveniences,
  setAdditionalConvenience,
  selectAdditionalConvenience,
} from 'src/redux/Filters/FiltersSlice';
import CheckboxButtons from 'src/components/CheckboxButtons/CheckboxButtons';
import { CheckboxButtonItemType } from 'src/components/CheckboxButtons/Types';
import DateDropdown from 'src/components/DateDropdown/DateDropdown';
import DropdownGuests from 'src/components/DropdownGuests/DropdownGuests';
import DropdownRoom from 'src/components/DropdownRoom/DropdownRoom';
import RangeSlider from 'src/components/RangeSlider/RangeSlider';
import ExpandableList from 'src/components/ExpandableList/ExpandableList';

import style from './Filters.module.sass';

const Filters = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleFiltersButtonClick = () => setIsOpen(!isOpen);

  return (
    <div className={[style.filters, isOpen ? style.filtersOpen : ''].join(' ')}>
      <button
        type='button'
        className={style.filtersButton}
        onClick={handleFiltersButtonClick}
        aria-label='filter button'
      />
      <div className={style.filtersDate}>
        <DateDropdown
          titles={['даты пребывания в отеле']}
          modifier="single"
          isSmall
        />
      </div>
      <div className={style.filtersGuests}>
        <h2 className={style.filtersGuestsTitle}>гости</h2>
        <DropdownGuests placeholder="Сколько гостей" opened={false} />
      </div>
      <div className={style.filtersPrice}>
        <RangeSlider />
        <p className={style.filtersPriceText}>
          Стоимость за сутки пребывания в номере
        </p>
      </div>
      <div className={style.filtersRules}>
        <CheckboxButtons
          title="правила дома"
          items={useSelector(selectRules)}
          handleItemChange={(items) => dispatch(setRules(items))}
        />
      </div>
      <div className={style.filtersAvailability}>
        <CheckboxButtons<Required<CheckboxButtonItemType>>
          title="доступность"
          isRich
          items={useSelector(selectAvailability)}
          handleItemChange={(items) => dispatch(setAvailability(items))}
        />
      </div>
      <div className={style.filtersConveniences}>
        <h2 className={style.filtersConveniencesTitle}>удобства номера</h2>
        <DropdownRoom
          placeholder="Выберите удобства"
          values={useSelector(selectConveniences)}
          handleCountersChange={(values) => dispatch(setConveniences(values))}
        />
      </div>
      <div className={style.filtersAdditionalConveniences}>
        <ExpandableList text='дополнительные удобства'>
          <CheckboxButtons
            items={useSelector(selectAdditionalConvenience)}
            handleItemChange={(items) =>
              dispatch(setAdditionalConvenience(items))
            }
          />
        </ExpandableList>
      </div>
    </div>
  );
};

export default Filters;
