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
    <div className={styles['dropdown-counter']}>
      <div className={styles['dropdown-counter__header']}>{text}</div>
      <div className={styles['dropdown-counter__container']}>
        <button
          className={
            (number > 0)
              ? styles['container-dropdown__decrease_dark']
              : styles['container-dropdown__decrease']
          }
          onClick={handleClickMinus}
          onKeyDown={handleClickMinus}
          type='button'
        >
          -
        </button>
        <div className={styles['container-dropdown__value']}>{number}</div>
        <button
          className={styles['container-dropdown__increase']}
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
