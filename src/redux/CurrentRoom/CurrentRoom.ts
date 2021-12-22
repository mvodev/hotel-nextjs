import { AnyAction } from 'redux';
import DefaultState from './DefaultState';
import CurrentRoomState, {
  SET_CURRENT_ROOM,
  SET_ROOM_BOOKED_BY_USER,
  SET_ROOM_LOADING,
  SET_IS_BOOKING_BLOCKED,
  SET_IS_BOOKED,
  SET_IN_BOOKING_PROCESS,
} from './Types';

const initialState = {
  ...DefaultState,
  isLoading: true,
};

const CurrentRoom = (
  state: CurrentRoomState = initialState,
  action: AnyAction
): CurrentRoomState => {
  switch (action.type) {
    case SET_CURRENT_ROOM:
      return action.payload
        ? {
            ...state,
            ...action.payload,
          }
        : {
            ...state,
            ...DefaultState,
          };

    case SET_ROOM_LOADING:
      return { ...state, isLoading: action.payload };

    case SET_ROOM_BOOKED_BY_USER:
      return { ...state, isRoomBookedByUser: action.payload };

    case SET_IS_BOOKING_BLOCKED:
      return { ...state, isBookingBlocked: action.payload };

    case SET_IS_BOOKED:
      return { ...state, isBooked: action.payload };

    case SET_IN_BOOKING_PROCESS:
      return { ...state, inBookingProcess: action.payload };

    default:
      return state;
  }
};

export default CurrentRoom;
