import RatingBar from '../RatingBar/RatingBar';
import RoomSlider from '../RoomSlider/RoomSlider';
import styles from './RoomCard.module.scss';
import RoomCardProps from './Types';

const RoomCard = ({
  roomNumber,
  isLux,
  rating,
  price,
  reviewsCount,
  slides,
}: RoomCardProps): React.ReactElement => {
  const luxText = isLux ? <span className={styles.luxText}>люкс</span> : null;

  const number = (
    <span className={styles.number}>
      № {roomNumber}
      {luxText}
    </span>
  );

  const roomPrice = (
    <span className={styles.priceText}>
      <span className={styles.price}>{price}</span> в сутки
    </span>
  );

  const reviews = (
    <span className={styles.review}>
      <span className={styles.reviewCount}>{reviewsCount} Отзывов</span>
    </span>
  );

  const roomCard = (
    <div className={styles.roomCard}>
      <RoomSlider {...{ slides }} />
      <div className={styles.infoSection}>
        <div className={styles.info}>
          {number}
          {roomPrice}
        </div>
        <div className={styles.info}>
          <RatingBar {...{ rating }} />
          {reviews}
        </div>
      </div>
    </div>
  );

  return roomCard;
};

export default RoomCard;
