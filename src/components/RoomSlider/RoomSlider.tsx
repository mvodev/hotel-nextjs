import { useState } from 'react';
import CirclesNavigateBar from './CirclesNavigateBar/CirclesNavigateBar';
import styles from './RoomSlider.module.scss';
import SlidesSection from './SlidesSection/SlidesSection';
import RoomSliderProps from './Type';

const RoomSlider = ({ slides }: RoomSliderProps): React.ReactElement => {
  const [activeSlideIndex, changeIndex] = useState(0);

  const roomSlider = (
    <div className={styles.roomSlider}>
      <SlidesSection {...{ slides, activeSlideIndex }} />
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
        <CirclesNavigateBar
          {...{ circlesCount: 4, activeSlideIndex, onClick: changeIndex }}
        />
      </div>
    </div>
  );

  return roomSlider;
};

export default RoomSlider;
