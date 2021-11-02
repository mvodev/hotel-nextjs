import React, { useState } from 'react';
import DropdownCounter from '../dropdown-counter/DropdownCounter';
import Button from '../button/button';
import styles from './dropdown.module.scss';
import Utils from '../../utils/Utils';

type DropdownGuestsProps = {
  placeholder: string;
  opened: boolean;
  value: {
    adult: number;
    child: number;
    infants: number;
  };
}

const DropdownGuests = (props : DropdownGuestsProps): JSX.Element => {

  const { value, placeholder } = props;

  const spellCases = {
    guests: ['гость', 'гостя', 'гостей'],
    infants: ['младенец', 'младенца', 'младенцев'],
  };
  const [ opened, setOpened ] = useState(props.opened);
  const [ adult, setAdult ] = useState(value.adult);
  const [ infants, setInfants ] = useState(value.infants);
  const [ child, setChild ] = useState(value.child);

  const dropdownOpenedStyle = {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    border: '1px solid rgba(31, 32, 65, 0.5)',
  };

  const dropdownBodyOpenedStyle = { display: 'block' };

  const dropdownBodyClosedStyle = { display: 'none' };

  const handleApplyButton = ()=> {
    setOpened(false);
  }

  const handleClearButton = ()=> {
    setOpened(false);
    setAdult(0);
    setChild(0);
    setInfants(0);
  }

  const handleDropdownClick = ()=> {
    setOpened(!opened);
    window.addEventListener('click', handleOutsideClick);
  }

  const handleOutsideClick = (event: Event)=> {
    const { target } = event;
    if (!(target as Element).closest(`.${styles['dropdown-guests']}`)) {
      setOpened(false);
      window.removeEventListener('click', handleOutsideClick);
    }
  };

  const onChange = (data: number, type: string): void => {
    if (type === 'adult') {
      setAdult(data);
    } else if (type === 'child') {
      setChild(data);
    } else {
      setInfants(data);
    }
  }

  const getValueForInputField = (): string => {
    let result = '';
    const total = adult + child;
    result = `${total} ${
      spellCases.guests[Utils.getPosInSpellCasesArray(total)]
    }`;
    if (infants > 0) {
      result += `,  ${infants} ${
        spellCases.infants[Utils.getPosInSpellCasesArray(infants)]
      }`;
    }
    if (total === 0) {
      result = '';
    }
    return result;
  }

  return (
    <div
      className={styles['dropdown-guests']}
      style={opened ? dropdownOpenedStyle : {}}
    >
      <div
        className={styles['dropdown-guests__input-wrapper']}
        onClick={handleDropdownClick}
        onKeyDown={handleDropdownClick}
        role='textbox'
        tabIndex={0}
      >
        <input
          type='text'
          readOnly
          className={styles['dropdown-guests__input']}
          placeholder={placeholder}
          value={getValueForInputField()}
        />
        <div className={styles['dropdown-guests__arrow']}>
          keyboard_arrow_down
        </div>
      </div>
      <div
        className={styles['dropdown-guests__body']}
        style={
          opened ? dropdownBodyOpenedStyle : dropdownBodyClosedStyle
        }
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
        <div className={styles['dropdown-guests__body-buttons']}>
          <div
            style={
              (child + adult + infants) > 0 ? {} : { visibility: 'hidden', cursor: 'none' }
            }
          >
            <Button text='очистить' onClick={handleClearButton} />
          </div>
          <Button text='применить' onClick={handleApplyButton} />
        </div>
      </div>
    </div>
  );
}

export default DropdownGuests;
