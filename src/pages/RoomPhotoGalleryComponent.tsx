import type { ReactElement } from 'react';
import RoomPhotoGallery from 'src/components/RoomPhotoGallery/RoomPhotoGallery';

const props = {
  mainPhoto: 'gallery-room-1.webp',
  firstAdditionalPhoto: 'gallery-room-2.webp',
  secondAdditionalPhoto: 'gallery-room-3.webp',
};

const RoomPhotoGalleryComponent = (): ReactElement => (
  <RoomPhotoGallery {...props} />
);

export default RoomPhotoGalleryComponent;
