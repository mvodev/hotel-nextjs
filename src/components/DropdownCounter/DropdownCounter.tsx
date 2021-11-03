import styles from './DropdownCounter.module.scss';

type DropdownCounterProps = {
  text: string;
  number: number;
  onChange: (counter: number, type: string) => void;
  type: string;
};

const DropdownCounter = (props: DropdownCounterProps): JSX.Element  => {
  const { text, number, onChange, type } = props

  const handleClickMinus = () => {
    if (number > 0) onChange(number - 1, type);
  }

  const handleClickPlus = () => {
    onChange(number + 1, type);
  }
    
  return (
    <div className={styles.dropdownCounter}>
      <div className={styles.dropdownCounterHeader}>{text}</div>
      <div className={styles.dropdownCounterContainer}>
        <button
          className={
            (number > 0)
              ? styles.containerDropdownDecreaseDark
              : styles.containerDropdownDecrease
          }
          onClick={handleClickMinus}
          onKeyDown={handleClickMinus}
          type='button'
        >
          -
        </button>
        <div className={styles.containerDropdownValue}>{number}</div>
        <button
          className={styles.containerDropdownIncrease}
          onClick={handleClickPlus}
          onKeyDown={handleClickPlus}
          type = 'button'
        >
          +
        </button>
      </div>
    </div>
  );
}

export default DropdownCounter;
