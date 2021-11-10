import type { ReactElement } from 'react';
import RoomPhotoGallery from 'src/components/RoomPhotoGallery/RoomPhotoGallery';

const props = {
  mainPhoto: 'room-1-photo-1.png',
  firstAdditionalPhoto: 'room-1-photo-2.png',
  secondAdditionalPhoto: 'room-1-photo-3.png',
};

const RoomPhotoGalleryComponent = (): ReactElement => (
  <RoomPhotoGallery {...props} />
);

export default RoomPhotoGalleryComponent;
