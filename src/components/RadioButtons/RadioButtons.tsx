/* eslint-disable jsx-a11y/label-has-associated-control */
import { ReactElement } from 'react';
import RadioButtonsType from './Types';

import styles from './RadioButtons.module.sass';

const RadioButtons = ({ groupName, items, props }: RadioButtonsType): ReactElement => {

  const radioItems = items.map((item) => (
      <label className={styles.radioButtonsItem} key={item.value}>
        <input
          name={groupName}
          className={styles.radioButtonsInput}
          type='radio'
          value={item.value}
          defaultChecked={item.checked}
          {...props}
        />
        <span className={styles.radioButtonsImitator} />
        <span className={styles.radioButtonsText}>{item.text}</span>
      </label>
    )
  );

  return <div className={styles.radioButtons}>{radioItems}</div>;
};

export default RadioButtons;
