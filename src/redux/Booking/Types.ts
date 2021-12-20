import { ReturnedRoomType, BookingType } from 'src/firebaseAPI/Types';

type BookingList = Omit<BookingType, 'dates'> & { start: number; end: number };

type BookedRoom = ReturnedRoomType;

type BookingState = {
  list: BookingList[];
  rooms: BookedRoom[];
  fetching: boolean;
};

export type { BookingList, BookedRoom };

export default BookingState;
