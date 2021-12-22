/* eslint-disable arrow-body-style */

import styles from './ArrowButton.module.scss';
import ArrowButtonProps from './Types';

const ArrowButton = ({
  icon,
  onClick,
}: ArrowButtonProps): React.ReactElement => {
  const handleArrowButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (onClick) {
      onClick();
    }

    event.preventDefault();
  };

  return (
    <button
      type="button"
      className={styles.arrowButton}
      onClick={handleArrowButtonClick}
      tabIndex={-1}
    >
      {icon}
    </button>
  );
};

export default ArrowButton;
