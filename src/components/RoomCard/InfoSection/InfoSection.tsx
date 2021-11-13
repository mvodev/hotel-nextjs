import getPosInSpellCasesArray from 'src/utils/Utils';
import RatingBar from './RatingBar/RatingBar';
import styles from './InfoSection.module.scss';
import InfoSectionProps from './Types';

const InfoSection = ({
  roomNumber,
  isLux,
  rating,
  price,
  reviewsCount,
}: InfoSectionProps): React.ReactElement => {
  const review = ['Отзыв', 'Отзыва', 'Отзывов'][
    getPosInSpellCasesArray(reviewsCount)
  ];

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
        {price.toLocaleString('ru-RU')}&#8381;
      </span>
      {' в сутки'}
    </span>
  );

  const reviews = (
    <span className={`${styles.text} ${styles.textAlignmentRight}`}>
      <span className={styles.textStyleBold}>{reviewsCount}</span> {review}
    </span>
  );

  const infoSection = (
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
  );

  return infoSection;
};

export default InfoSection;
