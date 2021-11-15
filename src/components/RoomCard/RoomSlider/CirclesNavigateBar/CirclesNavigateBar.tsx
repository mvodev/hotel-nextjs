import React from 'react';
import styles from './CirclesNavigateBar.module.scss';
import CirclesNavigateBarProps from './Types';

const CirclesNavigateBar = ({
  circlesCount,
  activeSlideIndex,
  onClick,
}: CirclesNavigateBarProps): React.ReactElement => {
  const handleButtonClick = (event: React.MouseEvent, circleIndex: number) => {
    if (onClick) {
      onClick(circleIndex);
    }

    event.preventDefault();
  };

  const circles = [...new Array(circlesCount)].map((_, circleIndex) => {
    let circleClasses = styles.circleButton;
    circleClasses +=
      circleIndex === activeSlideIndex ? ` ${styles.circleButtonActive}` : '';

    return (
      <button
        key={circleIndex}
        className={circleClasses}
        type='button'
        aria-label='slide switch'
        onClick={(event: React.MouseEvent) =>
          handleButtonClick(event, circleIndex)
        }
      />
    );
  });

  return <div className={styles.circlesNavigateBar}>{circles}</div>;
};

export default CirclesNavigateBar;
