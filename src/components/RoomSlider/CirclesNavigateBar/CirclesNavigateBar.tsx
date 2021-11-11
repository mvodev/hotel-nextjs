import { useState } from 'react';
import styles from './CirclesNavigateBar.module.scss';
import CirclesNavigateBarProps from './Types';

const CirclesNavigateBar = ({
  circlesCount,
}: CirclesNavigateBarProps): React.ReactElement => {
  const [activeIndex, changeIndex] = useState(0);

  const circles = [...new Array(circlesCount)].map((_, circleIndex) => {
    let circleClasses = styles.circleButton;
    circleClasses += circleIndex === activeIndex ? ` ${styles.circleButtonActive}` : '';

    return (
      <button
        key={circleIndex}
        className={circleClasses}
        type='button'
        aria-label='slide switch'
      />
    );
  });

  return <div className={styles.circlesNavigateBar}>{circles}</div>;
};

export default CirclesNavigateBar;
