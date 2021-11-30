import { useState } from 'react';
import styles from './ModalWindow.module.scss';
import ModalWindowProps from './Types';

const ModalWindow = ({
  image,
  title,
  text,
}: ModalWindowProps): React.ReactElement | null => {
  const [isEnabled, setEnabled] = useState(true);
  const handleCloseClick = () => {
    setEnabled(false);
  };

  const cardImage = image ? (
    <img className={styles.image} src={`./images/${image}`} alt='' />
  ) : null;

  const modalWindow = isEnabled ? (
    <div className={styles.modalWindow}>
      <div className={styles.curtain} />
      <div className={styles.card}>
        <button
          type='button'
          className={styles.close}
          onClick={handleCloseClick}
        >
          close
        </button>
        {cardImage}
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  ) : null;

  return modalWindow;
};

export default ModalWindow;
