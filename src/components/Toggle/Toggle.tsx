/* eslint-disable jsx-a11y/label-has-associated-control */
import ToggleProps from './Types';
import styles from './Toggle.module.scss';

const Toggle = ( { isChecked, description, onChangeCallback }: ToggleProps): JSX.Element => 
  <div className={styles.toggleContainer}>
    <label className={styles.toggleLabel} > {description}
      <input 
        type='checkbox' 
        defaultChecked={isChecked}
        className={styles.toggleInput}
        onChange={onChangeCallback}/>
      <span className={styles.toggleSwitch}/>
    </label>
  </div>

export default Toggle;