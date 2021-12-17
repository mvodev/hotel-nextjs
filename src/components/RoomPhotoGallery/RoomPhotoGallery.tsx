/* eslint-disable arrow-body-style */

import { useSelector } from 'react-redux';
import { AppState } from 'src/redux/Store';
import styles from './RoomPhotoGallery.module.scss';

const RoomPhotoGallery = (): React.ReactElement | null => {
  const [mainPhoto, firstAdditionalPhoto, secondAdditionalPhoto] = useSelector(
    (state: AppState) => [...state.CurrentRoom.gallery ]
  );

  const gallery = (
    <div className={styles.roomPhotoGallery}>
      <div className={styles.mainPhotoSection}>
        <img
          className={styles.roomPhoto}
          src={`/images/${mainPhoto}`}
          alt="room"
        />
      </div>
      <div className={styles.additionalPhotosSection}>
        <div className={styles.additionalPhotoContainer}>
          <img
            className={styles.roomPhoto}
            src={`/images/${firstAdditionalPhoto}`}
            alt="room"
          />
        </div>
        <div className={styles.additionalPhotoContainer}>
          <img
            className={styles.roomPhoto}
            src={`/images/${secondAdditionalPhoto}`}
            alt="room"
          />
        </div>
      </div>
    </div>
  );

  return mainPhoto && firstAdditionalPhoto && secondAdditionalPhoto
    ? gallery
    : null;
};

export default RoomPhotoGallery;
