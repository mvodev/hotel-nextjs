import { ReturnedRoomType } from 'src/firebaseAPI/Types';

type BookedRoom = ReturnedRoomType;

type BookingState = {
  rooms: BookedRoom[];
  fetching: boolean;
};

export type { BookedRoom };

export default BookingState;
