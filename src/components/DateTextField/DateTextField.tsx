import { useState, useRef } from 'react';
import InputMask from 'react-input-mask';

import styles from './DateTextField.module.sass';

const DateTextField = ({
  placeholder = 'ДД.ММ.ГГГГ',
}: {
  placeholder?: string;
}): JSX.Element => {
  const [value, changeValue] = useState('');
  const [isValid, toggleValidStatus] = useState(true);
  const mask = useRef(placeholder.replace(/\p{L}/gu, '9'));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(e.target.value);
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isFilled = e.target.value.length === placeholder.length;
    const isValidDate = Date.parse(e.target.value);
    if (isFilled && isValidDate) {
      toggleValidStatus(true);
      return;
    }
    toggleValidStatus(false);
  }

  return (
    <InputMask
      className={[
        styles.dateTextField,
        isValid ? '' : styles.dateTextFieldInvalid
      ].join(' ')}
      mask={mask.current}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      maskPlaceholder={null}
      placeholder={placeholder}
    />
  );
};

export default DateTextField;
