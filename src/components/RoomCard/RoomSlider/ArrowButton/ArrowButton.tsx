/* eslint-disable arrow-body-style */

import styles from './ArrowButton.module.scss';
import ArrowButtonProps from './Types';

const ArrowButton = ({
  icon,
  onClick,
}: ArrowButtonProps): React.ReactElement => {
  return (
    <button type='button' className={styles.arrowButton} onClick={onClick}>
      {icon}
    </button>
  );
};

export default ArrowButton;
