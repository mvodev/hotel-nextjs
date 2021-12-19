import { AnyAction } from 'redux';
import DefaultState from './DefaultState';
import CurrentRoomState, { SET_CURRENT_ROOM, SET_ROOM_LOADING } from './Types';

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
            ...JSON.parse(action.payload),
          }
        : {
            ...state,
            ...DefaultState,
          };
    case SET_ROOM_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default CurrentRoom;
