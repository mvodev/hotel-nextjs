import { ReactElement } from 'react';
import LikeButton from 'src/components/LikeButton/LikeButton';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_LIKE, REMOVE_LIKE } from 'src/redux/CurrentRoomComments/Types';
import { AppState } from 'src/redux/Store';
import type { ReviewType } from '../Types';
import { dateToTimeAgo } from '../../../utils/Utils';
import style from './Review.module.sass';

const Review = ({
  commentID,
  avatar,
  userName,
  publicationDate,
  text,
  likesNumber,
  liked,
}: ReviewType): ReactElement => {
  const dispatch = useDispatch();
  const uid = useSelector((state: AppState) => state.Authentication.user.uid);
  const roomID = useSelector((state: AppState) => state.CurrentRoom.roomID);
  // const [likes, setLikes] = useState({ likesNumber, liked });

  const handleLikeButtonClick = () => {
    if (liked) {
      dispatch({ type: REMOVE_LIKE, payload: { roomID, commentID, uid } });
    } else {
      dispatch({ type: ADD_LIKE, payload: { roomID, commentID, uid } });
    }
    // setLikes({
    //   likesNumber: likes.liked ? likes.likesNumber - 1 : likes.likesNumber + 1,
    //   liked: !likes.liked,
    // });
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
            likesNumber={likesNumber}
            liked={liked}
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
