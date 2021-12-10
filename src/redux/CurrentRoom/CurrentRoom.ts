import { AnyAction } from 'redux';
import { ReturnedRoomType } from 'src/firebaseAPI/Types';
import DefaultState from './DefaultState';
import { SET_CURRENT_ROOM } from './Types';

const CurrentRoom = (
  state: ReturnedRoomType = DefaultState,
  action: AnyAction
): ReturnedRoomType => {
  switch (action.type) {
    case SET_CURRENT_ROOM:
      console.dir(JSON.parse(action.payload));
      return JSON.parse(action.payload).roomID.length > 0
        ? {
            ...state,
            ...JSON.parse(action.payload),
          }
        : DefaultState;
    default:
      return state;
  }
};

export default CurrentRoom;
