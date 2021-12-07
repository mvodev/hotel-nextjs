import { ReactElement } from 'react';
import Review from './Review/Review';
import type { ReviewsType } from './Types';
import { getDeclension } from '../../utils/Utils';
import style from './Reviews.module.sass';

const Reviews = ({ title, reviews }: ReviewsType): ReactElement => {
  const reviewsNumber = reviews.length;

  const getReviews = reviews.map((review) => (
    <div className={style.reviewsItem} key={review.id}>
      <Review
        id={review.id}
        avatar={review.avatar}
        userName={review.userName}
        publicationDate={review.publicationDate}
        text={review.text}
        likesNumber={review.likesNumber}
        liked={review.liked}
      />
    </div>
  ));

  return (
    <section className={style.reviews}>
      <h2 className={style.reviewsTitle}>{title}</h2>
      <p className={style.reviewsNumberOfReviews}>
        {`${reviewsNumber} ${getDeclension(reviewsNumber, [
          'отзыв',
          'отзыва',
          'отзывов',
        ])}`}
      </p>
      <div className={style.reviewsContent}>{getReviews}</div>
    </section>
  );
};

export default Reviews;
