import CirclesNavigateBar from './CirclesNavigateBar/CirclesNavigateBar';
import styles from './RoomSlider.module.scss';

const RoomSlider = (): React.ReactElement => {
  const roomSlider = (
    <div className={styles.roomSlider}>
      <button
        type='button'
        className={`${styles.arrowButton} ${styles.arrowButtonAlignmentLeft}`}
      >
        navigate_before
      </button>
      <button
        type='button'
        className={`${styles.arrowButton} ${styles.arrowButtonAlignmentRight}`}
      >
        navigate_next
      </button>
      <div className={styles.circlesNavigateBarContainer}>
        <CirclesNavigateBar {...{ circlesCount: 4 }} />
      </div>
    </div>
  );

  return roomSlider;
};

export default RoomSlider;
