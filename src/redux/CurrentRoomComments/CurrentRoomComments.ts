import { AnyAction } from 'redux';
import { CommentType } from 'src/firebaseAPI/Types';
import { SET_ROOM_COMMENTS } from './Types';

const initialState: CommentType[] = [];

const currentRoomComments = (
  state: CommentType[] = initialState,
  action: AnyAction
): CommentType[] => {
  switch (action.type) {
    case SET_ROOM_COMMENTS:
      return JSON.parse(action.payload);
    default:
      return state;
  }
};

export default currentRoomComments;
