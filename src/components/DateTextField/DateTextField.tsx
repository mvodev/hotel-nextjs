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
    />
  );
};

export default DateTextField;
