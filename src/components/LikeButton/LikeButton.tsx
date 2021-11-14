/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { KeyboardEvent } from 'react';
import LikeButtonType from './Types';
import style from './LikeButton.module.sass';

const LikeButton = (props: LikeButtonType): JSX.Element => {
  const { likesNumber, liked, onClick } = props;

  const handleLikeButtonClick = (): void => {
    onClick();
  };

  const handleLikeButtonKeyDown = (event: KeyboardEvent): void => {
    if (event.code === 'Enter') onClick();
  };

  const likeButtonClass = `${style.likeButton} ${
    liked ? style.likeButtonLiked : ''
  }`;

  return (
    <div
      className={likeButtonClass}
      onClick={handleLikeButtonClick}
      onKeyDown={handleLikeButtonKeyDown}
      tabIndex={0}
    >
      <span className={style.likeButtonNumber}>{likesNumber}</span>
    </div>
  );
};

export default LikeButton;
