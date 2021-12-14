import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'src/redux/Store';
import Review from './Review/Review';
import { getDeclension } from '../../utils/Utils';
import style from './Reviews.module.sass';

const Reviews = ({ title }: { title: string }): ReactElement => {
  const reviews = useSelector((state: AppState) => state.currentRoomComments);
  const uid = useSelector((state: AppState) => state.Authentication.user.uid);

  const reviewsNumber = reviews.length;
  const getReviews = reviews.map((review) => (
    <div className={style.reviewsItem} key={review.commentID}>
      <Review
        commentID={review.commentID}
        avatar={review.avatar}
        userName={review.userName}
        publicationDate={new Date(review.publicationDate.seconds * 1000)}
        text={review.text}
        likesNumber={review.likedBy.length}
        liked={uid ? review.likedBy.includes(uid) : false}
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
