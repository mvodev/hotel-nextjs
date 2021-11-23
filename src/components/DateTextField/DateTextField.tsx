import { useState, useRef } from 'react';
import InputMask from 'react-input-mask';

import styles from './DateTextField.module.sass';

const DateTextField = ({
  placeholder = 'ДД.ММ.ГГГГ',
}: {
  placeholder?: string;
}): JSX.Element => {
  const [value, changeValue] = useState('');
  const mask = useRef(placeholder.replace(/\p{L}/gu, '9'));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(e.target.value);
    const isFilled = e.target.value.length === placeholder.length;
    const isValidDate = Date.parse(e.target.value);
    if (isFilled && isValidDate) {
      // hihe
    }
  };

  return (
    <InputMask
      className={styles.dateTextField}
      mask={mask.current}
      onChange={onChange}
      value={value}
      maskPlaceholder={null}
      placeholder={placeholder}
    />
  );
};

export default DateTextField;
