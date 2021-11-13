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
  const luxText = isLux ? (
    <span className={`${styles.textSizeLarge} ${styles.textColorPurple}`}>
      люкс
    </span>
  ) : null;

  const number = (
    <span className={`${styles.textStyleBold} ${styles.textColorDark}`}>
      № <span className={styles.textSizeExtraLarge}>{roomNumber} </span>
      {luxText}
    </span>
  );

  const roomPrice = (
    <span
      className={`${styles.text} ${styles.textSizeSmall} ${styles.textAlignmentRight}`}
    >
      <span className={styles.textStyleBold}>
        {price.toLocaleString('ru-RU', {
          style: 'currency',
          maximumFractionDigits: 0,
          currency: 'RUB',
        })}
      </span>{' '}
      в сутки
    </span>
  );

  const reviews = (
    <span className={`${styles.text} ${styles.textAlignmentRight}`}>
      <span className={styles.textStyleBold}>{reviewsCount}</span> Отзывов
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
        <div
          className={`${styles.info} ${styles.infoAlignmentCenter} ${styles.infoAlignmentLeft}`}
        >
          <RatingBar {...{ rating }} />
          {reviews}
        </div>
      </div>
    </div>
  );

  return roomCard;
};

export default RoomCard;
