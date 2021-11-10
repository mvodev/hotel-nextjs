import styles from './RoomPhotoGallery.module.scss';
import RoomPhotoGalleryProps from './Types';

const RoomPhotoGallery = ({
  mainPhoto,
  firstAdditionalPhoto,
  secondAdditionalPhoto,
}: RoomPhotoGalleryProps): React.ReactElement => {
  const roomPhotoGallery = (
    <div className={styles.roomPhotoGallery}>
      <img
        className={styles.mainPhoto}
        src={`./images/${mainPhoto}`}
        alt='room'
      />
      <div className={styles.additionalPhotosSection}>
        <img
          className={styles.additionalPhoto}
          src={`./images/${firstAdditionalPhoto}`}
          alt='room'
        />
        <img
          className={styles.additionalPhoto}
          src={`./images/${secondAdditionalPhoto}`}
          alt='room'
        />
      </div>
    </div>
  );

  return roomPhotoGallery;
};

export default RoomPhotoGallery;
