import { ReactElement, useState } from 'react';
import LikeButton from 'src/components/LikeButton/LikeButton';
import type { ReviewType } from '../Types';
import { dateToTimeAgo } from '../../../utils/Utils';
import style from './Review.module.sass';

const Review = (props: ReviewType): ReactElement => {
  const { avatar, userName, publicationDate, text, likesNumber, liked } = props;
  const [likes, setLikes] = useState({ likesNumber, liked });

  const handleLikeButtonClick = () => {
    setLikes({
      likesNumber: likes.liked ? likes.likesNumber - 1 : likes.likesNumber + 1,
      liked: !likes.liked,
    });
  };

  return (
    <article className={style.review}>
      <div className={style.reviewUser}>
        <img src={avatar} alt={userName} className={style.reviewAvatar} />
        <div className={style.reviewNameContainer}>
          <p className={style.reviewUserName}>{userName}</p>
          <p className={style.reviewPublicationDate}>
            {dateToTimeAgo(publicationDate)}
          </p>
        </div>
      </div>
      <div className={style.reviewMassage}>
        <div className={style.reviewLikeButtonContainer}>
          <LikeButton
            likesNumber={likes.likesNumber}
            liked={likes.liked}
            onClick={handleLikeButtonClick}
          />
        </div>
        <div className={style.reviewTextContainer}>
          <p className={style.reviewText}>{text}</p>
        </div>
      </div>
    </article>
  );
};

export default Review;
