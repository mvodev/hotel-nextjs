import SlidesSectionProps from './Types';
import styles from './SlidesSection.module.scss';

const SlidesSection = ({
  slides,
  activeSlideIndex,
}: SlidesSectionProps): React.ReactElement => {
  const slidesCollections = slides.map((slide, slideIndex) => {
    let slideClasses = styles.slide;
    slideClasses +=
      slideIndex === activeSlideIndex ? ` ${styles.slideActive}` : '';

    return (
      <img
        className={slideClasses}
        key={slide}
        src={`./images/${slide}`}
        alt="room"
      />
    );
  });

  return <div className={styles.slidesSection}>{slidesCollections}</div>;
};

export default SlidesSection;
