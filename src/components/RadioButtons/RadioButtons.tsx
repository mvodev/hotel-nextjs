/* eslint-disable jsx-a11y/label-has-associated-control */
<<<<<<< HEAD
import { ReactElement } from 'react';
=======
import { ReactElement, useState } from 'react';
import { Field } from 'react-final-form';
>>>>>>> 9235f54 (rebase???)
import RadioButtonsType from './Types';

import styles from './RadioButtons.module.sass';

<<<<<<< HEAD
const RadioButtons = ({ groupName, items, ...props }: RadioButtonsType): ReactElement => {

  const radioItems = items.map((item) => (
      <label className={styles.radioButtonsItem} key={item.value}>
        <input
          name={groupName}
          className={styles.radioButtonsInput}
          type='radio'
          value={item.value}
          defaultChecked={item.checked}
          {...props}
=======
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
>>>>>>> 9235f54 (rebase???)
        />
        <span className={styles.radioButtonsImitator} />
        <span className={styles.radioButtonsText}>{item.text}</span>
      </label>
<<<<<<< HEAD
    )
  );
=======
    );
  });
>>>>>>> 9235f54 (rebase???)

  return <div className={styles.radioButtons}>{radioItems}</div>;
};

export default RadioButtons;
