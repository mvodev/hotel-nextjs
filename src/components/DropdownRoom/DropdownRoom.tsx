import { useState, useEffect } from 'react';

import { getPosInSpellCasesArray } from 'src/utils/Utils';

import DropdownCounter from '../DropdownCounter/DropdownCounter';
import styles from './DropdownRoom.module.scss';
import DropdownRoomProps from './Types';

const DropdownRoom = ({
  values,
  placeholder,
  handleCountersChange = () => {},
}: DropdownRoomProps): JSX.Element => {
  const [isOpened, setOpened] = useState(false);
  const [counterItems, setCounterItems] = useState(values);

  useEffect(() => setCounterItems(values), [values]);

  let allOptionsChosen = false;
  let counterTotal = 0;

  counterItems.forEach((elem) => {
    if (elem.value > 0) {
      allOptionsChosen = true;
    } else {
      allOptionsChosen = false;
    }
  });

  const dropdownClass = `${styles.dropdownRoom} ${
    isOpened ? styles.dropdownRoomIsOpened : ''
  }`;

  const dropdownRoomInputClass = `${styles.dropdownRoomInput} ${
    allOptionsChosen ? styles.dropdownRoomInputAllPositions : ''
  }`;

  const dropdownRoomBodyClass = `${styles.dropdownRoomBody} ${
    isOpened ? styles.dropdownRoomBodyIsOpened : ''
  }`;

  const handleOutsideClick = (event: Event) => {
    const { target } = event;
    if (!(target as Element).closest(`.${styles.dropdownRoom}`)) {
      setOpened(false);
      window.removeEventListener('click', handleOutsideClick);
    }
  };

  const handleDropdownClick = () => {
    setOpened(!isOpened);
    window.addEventListener('click', handleOutsideClick);
  };

  const onChange = (data: number, type: string): void => {
    const newState = counterItems.map((i) =>
      i.text === type ? { ...i, value: data } : i
    );
    setCounterItems(newState);
    handleCountersChange(newState);
  };

  const countersList = counterItems.map((elem) => (
    <DropdownCounter
      key={elem.text.toString()}
      text={elem.text}
      number={elem.value}
      onChange={onChange}
      type={elem.text}
    />
  ));

  const getValueForInputField = (): string => {
    let result = '';
    counterItems.forEach((elem) => {
      if (elem.value > 0) {
        counterTotal += elem.value;
        if (result.length > 0) {
          result += `, ${elem.value} ${
            elem.spellCases[getPosInSpellCasesArray(elem.value)]
          }`;
        } else {
          result += `${elem.value} ${
            elem.spellCases[getPosInSpellCasesArray(elem.value)]
          }`;
        }
      }
    });
    if (!allOptionsChosen) result += '...';
    if (counterTotal === 0) {
      result = placeholder;
    }
    return result;
  };

  return (
    <div className={dropdownClass}>
      <div
        className={styles.dropdownRoomInputWrapper}
        onClick={handleDropdownClick}
        onKeyDown={handleDropdownClick}
        role='textbox'
        tabIndex={0}
      >
        <input
          type='text'
          readOnly
          className={dropdownRoomInputClass}
          placeholder={counterTotal === 0 ? '0' : placeholder}
          value={getValueForInputField()}
        />
        <div className={styles.dropdownRoomArrow}>keyboard_arrow_down</div>
      </div>
      <div className={dropdownRoomBodyClass}>{countersList}</div>
    </div>
  );
};

export default DropdownRoom;
