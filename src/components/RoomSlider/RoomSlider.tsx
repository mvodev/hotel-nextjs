import { useState } from 'react';
import ArrowButton from './ArrowButton/ArrowButton';
import CirclesNavigateBar from './CirclesNavigateBar/CirclesNavigateBar';
import styles from './RoomSlider.module.scss';
import SlidesSection from './SlidesSection/SlidesSection';
import RoomSliderProps from './Type';

const RoomSlider = ({ slides }: RoomSliderProps): React.ReactElement => {
  const [activeSlideIndex, changeIndex] = useState(0);

  const nextIndex = () => {
    const newIndex = activeSlideIndex + 1;

    if (newIndex < slides.length) {
      changeIndex(newIndex);
    }
  };

  const previousIndex = () => {
    if (activeSlideIndex > 0) {
      changeIndex(activeSlideIndex - 1);
    }
  };

  const roomSlider = (
    <div className={styles.roomSlider}>
      <SlidesSection {...{ slides, activeSlideIndex }} />
      <div
        className={`${styles.arrowButtonContainer} ${styles.arrowButtonContainerAlignmentRight}`}
      >
        <ArrowButton {...{ icon: 'navigate_next', onClick: nextIndex }} />
      </div>
      <div
        className={`${styles.arrowButtonContainer} ${styles.arrowButtonContainerAlignmentLeft}`}
      >
        <ArrowButton {...{ icon: 'navigate_before', onClick: previousIndex }} />
      </div>
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
