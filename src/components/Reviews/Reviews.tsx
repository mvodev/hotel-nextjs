import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'src/redux/Store';
import Review from './Review/Review';
import { getDeclension } from '../../utils/Utils';
import style from './Reviews.module.sass';
import ReviewForm from '../ReviewForm/ReviewForm';

const Reviews = ({ title }: { title: string }): ReactElement => {
  const reviewsCollection = useSelector(
    (state: AppState) => state.currentRoomComments
  );
  const uid = useSelector((state: AppState) => state.Authentication.user.uid);

  const reviewsNumber = reviewsCollection.length;
  const reviews = reviewsCollection.map((review) => (
    <div className={style.reviewsItem} key={review.commentID}>
      <Review
        commentID={review.commentID}
        avatar={review.avatar}
        userName={review.userName}
        publicationDate={new Date(review.publicationDate.seconds * 1000)}
        text={review.text}
        likesNumber={review.likedBy.length}
        liked={uid ? review.likedBy.includes(uid) : false}
        score={review.score}
      />
    </div>
  ));

  const reviewsContent =
    reviewsNumber > 0 ? (
      <>
        <p className={style.reviewsNumberOfReviews}>
          {`${reviewsNumber} ${getDeclension(reviewsNumber, [
            'отзыв',
            'отзыва',
            'отзывов',
          ])}`}
        </p>
        <div className={style.reviewsContent}>{reviews}</div>{' '}
      </>
    ) : (
      <div className={style.reviewsContent}>
        <div className={style.reviewsItem}>Отзывов пока нет</div>
      </div>
    );

  return (
    <section className={style.reviews}>
      <h2 className={style.reviewsTitle}>{title}</h2>
      {reviewsContent}
      <ReviewForm />
    </section>
  );
};

export default Reviews;
