import styles from './CirclesNavigateBar.module.scss';
import CirclesNavigateBarProps from './Types';

const CirclesNavigateBar = ({
  circlesCount,
  activeSlideIndex,
  onClick,
}: CirclesNavigateBarProps): React.ReactElement => {
  const handleButtonClick = (circleIndex: number) => {
    if (onClick) {
      onClick(circleIndex);
    }
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
        onClick={handleButtonClick.bind(this, circleIndex)}
      />
    );
  });

  return <div className={styles.circlesNavigateBar}>{circles}</div>;
};

export default CirclesNavigateBar;
