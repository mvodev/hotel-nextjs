/* eslint-disable jsx-a11y/label-has-associated-control */
import { ReactElement, useState } from 'react';
import { Field } from 'react-final-form';
import RadioButtonsType from './Types';

import styles from './RadioButtons.module.sass';

const RadioButtons = ({ groupName, items }: RadioButtonsType): ReactElement => {
  const [state, setState] = useState(items);

  const handleItemChange = (index: number) => {
    const newState = state.map((item) => {
      const newItem = item;
      newItem.checked = false;
      return newItem;
    });

    newState[index].checked = true;
    setState(newState);
  };

  const radioItems = state.map((item, index) => {
    const handleInputChange = (): void => handleItemChange(index);
    return (
      <label className={styles.radioButtonsItem} key={item.id}>
        <Field
          name={groupName}
          component='input'
          type='radio'
          value={item.value}
          checked={item.checked}
          onChange={handleInputChange}
          className={styles.radioButtonInput}
        />
        <span className={styles.radioButtonsImitator} />
        <span className={styles.radioButtonsText}>{item.text}</span>
      </label>
    );
  });

  return <div className={styles.radioButtons}>{radioItems}</div>;
};

export default RadioButtons;
