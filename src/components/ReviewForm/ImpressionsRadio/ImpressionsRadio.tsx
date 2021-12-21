/* eslint-disable jsx-a11y/label-has-associated-control */

import { InputHTMLAttributes } from 'react';
import styles from './ImpressionsRadio.module.scss';
import Values from './Values';

const ImpressionsRadio = (
  props: InputHTMLAttributes<HTMLInputElement>
): React.ReactElement => {
  const radios = Values.map((radio) => (
    <label key={radio.key} className={styles.radioContainer}>
      <input
        className={styles.radio}
        type="radio"
        name="impression"
        value={radio.key}
        {...props}
      />
      <span
        className={[
          styles.radioText,
          styles[
            `radioText${radio.key.charAt(0).toUpperCase()}${radio.key.slice(1)}`
          ],
        ].join(' ')}
      >
        {radio.value}
      </span>
    </label>
  ));

  return <div className={styles.impressionsRadio}>{radios}</div>;
};

export default ImpressionsRadio;
