import { ReturnedRoomType, RoomType } from 'src/firebaseAPI/Types';

type CurrentRoomState = { 
  isLoading: boolean,
  inBookingProcess: boolean,
  isBookingBlocked: boolean,
  isBooked: boolean,
  isRoomBookedByUser: boolean,

} & ReturnedRoomType;

const SET_CURRENT_ROOM = 'SET-CURRENT-ROOM';
const GET_CURRENT_ROOM = 'GET-CURRENT-ROOM';
const SET_ROOM_LOADING = 'SET-ROOM-LOADING';
const SET_ROOM_BOOKED_BY_USER = 'SET-ROOM-BOOKED-BY-USER';
const CHECK_BOOKING_BLOCKED = 'CHECK_BOOKING_BLOCKED';
const SET_IS_BOOKING_BLOCKED = 'SET_IS_BOOKING_BLOCKED';
const SET_IS_BOOKED = 'SET_IS_BOOKED';
const SET_IN_BOOKING_PROCESS = 'SET_IN_BOOKING_PROCESS';

export default CurrentRoomState;
export {
  SET_CURRENT_ROOM,
  GET_CURRENT_ROOM,
  SET_ROOM_LOADING,
  SET_ROOM_BOOKED_BY_USER,
  SET_IS_BOOKING_BLOCKED,
  CHECK_BOOKING_BLOCKED,
  SET_IS_BOOKED,
  SET_IN_BOOKING_PROCESS,
};
