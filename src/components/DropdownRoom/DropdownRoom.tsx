import React, { useState } from 'react';
import DropdownCounter from '../DropdownCounter/DropdownCounter';
import styles from './DropdownRoom.module.scss';
import { getPosInSpellCasesArray } from '../../utils/Utils';
import DropdownRoomProps from './Types';

const DropdownRoom = (props: DropdownRoomProps): JSX.Element => {

  const { value, placeholder } = props;

  const spellCases = {
    bedrooms: ['спальня', 'спальни', 'спален'],
    beds: ['кровать', 'кровати', 'кроватей'],
    bathrooms: ['ванная', 'ванные', 'ванных'],
  };

  const [isOpened, setOpened] = useState(false);
  const [bedrooms, setBedrooms] = useState(value.bedrooms);
  const [beds, setBeds] = useState(value.beds);
  const [bathrooms, setBathrooms] = useState(value.bathrooms);

  const dropdownClass = `${styles.dropdownRoom} ${
    isOpened ? styles.dropdownRoomIsOpened : ''
  }`;

  const allPositionChosen = bathrooms > 0 && beds > 0 && bedrooms > 0;

  const dropdownRoomInputClass = `${styles.dropdownRoomInput} ${
    allPositionChosen ? styles.dropdownRoomInputAllPositions : ''
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
    if (type === 'bedrooms') {
      setBedrooms(data);
    } else if (type === 'beds') {
      setBeds(data);
    } else {
      setBathrooms(data);
    }
  };

  const getValueForInputField = (): string => {
    let result = '';
    if (bedrooms > 0) {
      result += `${bedrooms} ${
        spellCases.bedrooms[getPosInSpellCasesArray(bedrooms)]
      }`;
    }
    if (beds > 0) {
      if (result.length > 0) {
        result += `, ${beds} ${spellCases.beds[getPosInSpellCasesArray(beds)]}`;
      } else
        result += `${beds} ${spellCases.beds[getPosInSpellCasesArray(beds)]}`;
    }
    if (bathrooms > 0) {
      if (result.length > 0) {
        result += `, ${bathrooms} ${
          spellCases.bathrooms[getPosInSpellCasesArray(bathrooms)]
        }`;
      } else
        result += `${bathrooms} ${
          spellCases.bathrooms[getPosInSpellCasesArray(bathrooms)]
        }`;
    }
    if (!allPositionChosen) {
      result += '...';
    }
    if (bathrooms + bedrooms + beds === 0) {
      result = '';
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
          placeholder={placeholder}
          value={getValueForInputField()}
        />
        <div className={styles.dropdownRoomArrow}>keyboard_arrow_down</div>
      </div>
      <div
        className={dropdownRoomBodyClass}
      >
        <DropdownCounter
          text='Спальни'
          number={bedrooms}
          onChange={onChange}
          type='bedrooms'
        />
        <DropdownCounter
          text='Кровати'
          number={beds}
          onChange={onChange}
          type='beds'
        />
        <DropdownCounter
          text='Ванные комнаты'
          number={bathrooms}
          onChange={onChange}
          type='bathrooms'
        />
      </div>
    </div>
  );
};

export default DropdownRoom;
