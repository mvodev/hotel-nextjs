import { ReactElement } from 'react';
import Review from './Review/Review';
import { getDeclension } from '../../utils/Utils';
import style from './Reviews.module.sass';
import { useSelector } from 'react-redux';
import { AppState } from 'src/redux/Store';

const Reviews = ({ title }: { title: string }): ReactElement => {
  const reviews = useSelector((state: AppState) => state.currentRoomComments);

  const reviewsNumber = reviews.length;
  debugger;
  const getReviews = reviews.map((review) => (
    <div className={style.reviewsItem} key={review.uid}>
      ///////
      <Review
        id={review.uid} ////////////////
        avatar={review.avatar}
        userName={review.userName}
        publicationDate={review.publicationDate}
        text={review.text}
        likesNumber={review.likedBy.length}
        liked={false} //////////////
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
