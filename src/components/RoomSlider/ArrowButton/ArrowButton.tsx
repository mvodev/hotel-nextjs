import styles from './ArrowButton.module.scss';
import ArrowButtonProps from './Types';

const ArrowButton = ({
  icon,
  onClick,
}: ArrowButtonProps): React.ReactElement => {
  const arrowButton = (
    <button type='button' className={styles.arrowButton} onClick={onClick}>
      {icon}
    </button>
  );

  return arrowButton;
};

export default ArrowButton;
