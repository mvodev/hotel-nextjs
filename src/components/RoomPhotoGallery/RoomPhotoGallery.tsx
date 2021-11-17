/* eslint-disable arrow-body-style */

import styles from './RoomPhotoGallery.module.scss';
import RoomPhotoGalleryProps from './Types';

const RoomPhotoGallery = ({
  mainPhoto,
  firstAdditionalPhoto,
  secondAdditionalPhoto,
}: RoomPhotoGalleryProps): React.ReactElement => {
  return (
    <div className={styles.roomPhotoGallery}>
      <div className={styles.mainPhotoSection}>
        <img
          className={styles.roomPhoto}
          src={`./images/${mainPhoto}`}
          alt='room'
        />
      </div>
      <div className={styles.additionalPhotosSection}>
        <div className={styles.additionalPhotoContainer}>
          <img
            className={styles.roomPhoto}
            src={`./images/${firstAdditionalPhoto}`}
            alt='room'
          />
        </div>
        <div className={styles.additionalPhotoContainer}>
          <img
            className={styles.roomPhoto}
            src={`./images/${secondAdditionalPhoto}`}
            alt='room'
          />
        </div>
      </div>
    </div>
  );
};

export default RoomPhotoGallery;
