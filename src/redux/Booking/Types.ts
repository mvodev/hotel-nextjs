import { ReturnedRoomType, BookingType } from 'src/firebaseAPI/Types';

type BookingList = Omit<BookingType, 'dates'> & { start: number; end: number };

type BookedRoom = Omit<ReturnedRoomType, 'bookingDays'> & {
  bookingDays: number[];
};

type BookingState = {
  list: BookingList[];
  rooms: BookedRoom[];
  fetching: boolean;
  activeBooking: BookingList | null;
  activeRoom: BookedRoom | null;
};

export type { BookingList, BookedRoom };

export default BookingState;
