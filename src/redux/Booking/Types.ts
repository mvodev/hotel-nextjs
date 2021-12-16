import { ReturnedRoomType, BookingType } from 'src/firebaseAPI/Types';

type BookingList = BookingType;

type BookedRoom = ReturnedRoomType;

type BookingState = {
  list: BookingList[];
  rooms: BookedRoom[];
  fetching: boolean;
};

export type { BookingList, BookedRoom };

export default BookingState;
