<<<<<<< HEAD
import { useState } from 'react';
import MaskedInput from 'react-text-mask';

import isValidDate from 'src/utils/validateDate';

import styles from './DateTextField.module.sass';

const DateTextField = (
  props: React.InputHTMLAttributes<HTMLInputElement>
): JSX.Element => {
  const [isValid, toggleValidStatus] = useState(true);

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    toggleValidStatus(isValidDate(e.target.value));
  };

  return (
    <MaskedInput
      className={[
        styles.dateTextField,
        isValid ? '' : styles.dateTextFieldInvalid,
      ].join(' ')}
      mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
      onBlur={onBlur}
      placeholder="ДД.ММ.ГГГГ"
      {...props}
=======
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
>>>>>>> 64608ac (added date text field (masked text field))
    />
  );
};

export default DateTextField;
