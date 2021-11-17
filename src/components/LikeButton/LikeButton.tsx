import LikeButtonType from './Types';
import style from './LikeButton.module.sass';

const LikeButton = ({
  likesNumber,
  liked,
  onClick
}: LikeButtonType): JSX.Element => {

  const handleLikeButtonClick = (): void => {
    onClick();
  };

  const likeButtonClass = `${style.likeButton} ${
    liked ? style.likeButtonLiked : ''
  }`;

  return (
    <button
      className={likeButtonClass}
      type="button"
      onClick={handleLikeButtonClick}
      tabIndex={0}
    >
      <span className={style.likeButtonNumber}>{likesNumber}</span>
    </button>
  );
};

export default LikeButton;
