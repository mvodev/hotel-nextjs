import React, { useState } from 'react';
import DropdownCounter from '../DropdownCounter/DropdownCounter';
import Button from '../Button/Button';
import styles from './DropdownGuests.module.scss';
import { getPosInSpellCasesArray } from '../../utils/Utils';
import DropdownGuestsProps from './Types';

const DropdownGuests = (props: DropdownGuestsProps): JSX.Element => {
  const { value, placeholder } = props;

  const spellCases = {
    guests: ['гость', 'гостя', 'гостей'],
    infants: ['младенец', 'младенца', 'младенцев'],
  };
  const { opened } = props;
  const [isOpened, setOpened] = useState(opened);
  const [adult, setAdult] = useState(value.adult);
  const [infants, setInfants] = useState(value.infants);
  const [child, setChild] = useState(value.child);

  const handleApplyButton = () => {
    setOpened(false);
  };

  const handleClearButton = () => {
    setOpened(false);
    setAdult(0);
    setChild(0);
    setInfants(0);
  };

  const handleOutsideClick = (event: Event) => {
    const { target } = event;
    if (!(target as Element).closest(`.${styles.dropdownGuests}`)) {
      setOpened(false);
      window.removeEventListener('click', handleOutsideClick);
    }
  };

  const handleDropdownClick = () => {
    setOpened(!isOpened);
    window.addEventListener('click', handleOutsideClick);
  };

  const onChange = (data: number, type: string): void => {
    if (type === 'adult') {
      setAdult(data);
    } else if (type === 'child') {
      setChild(data);
    } else {
      setInfants(data);
    }
  };

  const getValueForInputField = (): string => {
    let result = '';
    const total = adult + child;
    result = `${total} ${spellCases.guests[getPosInSpellCasesArray(total)]}`;
    if (infants > 0) {
      result += `,  ${infants} ${
        spellCases.infants[getPosInSpellCasesArray(infants)]
      }`;
    }
    if (total === 0) {
      result = '';
    }
    return result;
  };

  return (
    <div
      className={[
        styles.dropdownGuests,
        isOpened ? styles.dropdownGuestsIsOpened : '',
      ].join(' ')}
    >
      <div
        className={styles.dropdownGuestsInputWrapper}
        onClick={handleDropdownClick}
        onKeyDown={handleDropdownClick}
        role='textbox'
        tabIndex={0}
      >
        <input
          type='text'
          readOnly
          className={styles.dropdownGuestsInput}
          placeholder={placeholder}
          value={getValueForInputField()}
        />
        <div className={styles.dropdownGuestsArrow}>keyboard_arrow_down</div>
      </div>
      <div
        className={[
          styles.dropdownGuestsBody,
          isOpened ? styles.dropdownGuestsBodyIsOpened : '',
        ].join(' ')}
      >
        <DropdownCounter
          text='Взрослые'
          number={adult}
          onChange={onChange}
          type='adult'
        />
        <DropdownCounter
          text='Дети'
          number={child}
          onChange={onChange}
          type='child'
        />
        <DropdownCounter
          text='Младенцы'
          number={infants}
          onChange={onChange}
          type='infants'
        />
        <div className={styles.dropdownGuestsBodyButtons}>
          <div
            className={
              child + adult + infants > 0
                ? ''
                : styles.dropdownGuestsButtonIsHidden
            }
          >
            <Button type='button' text='очистить' onClick={handleClearButton} />
          </div>
          <Button type='button' text='применить' onClick={handleApplyButton} />
        </div>
      </div>
    </div>
  );
};

export default DropdownGuests;
