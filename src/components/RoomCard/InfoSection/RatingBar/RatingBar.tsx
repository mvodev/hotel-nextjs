import RatingBarProps from './Types';
import styles from './RatingBar.module.scss';

const RatingBar = ({ rating }: RatingBarProps): React.ReactElement => {
  const STARS_COUNT = 5;
  const stars = [...new Array(STARS_COUNT)].map((_, starIndex) => {
    const starIcon = starIndex >= rating ? 'star_border' : 'star';
    return (
      <span key={starIndex} className={styles.star}>
        {starIcon}
      </span>
    );
  });

  return <div className={styles.ratingBar}>{stars}</div>;
};

export default RatingBar;
