import ToggleProps from './Types';
import styles from './Toggle.module.scss';

const Toggle = ( { isChecked, description, id, onChange }: ToggleProps): JSX.Element => 
  <div className={styles.toggleContainer}>
      <label htmlFor={id} className={styles.toggleLabel} > {description}
        <input type='checkbox' defaultChecked={isChecked} className={styles.toggleInput} id={id} onChange={onChange}/>
        <span className={styles.toggleSwitch}/>
      </label>
  </div>

export default Toggle;