import { AnyAction } from 'redux';
import { CommentInputType } from 'src/firebaseAPI/Types';
import { SET_ROOM_COMMENTS } from './Types';

const initialState: CommentInputType[] = [];

const currentRoomComments = (
  state: CommentInputType[] = initialState,
  action: AnyAction
): CommentInputType[] => {
  switch (action.type) {
    case SET_ROOM_COMMENTS:
      return JSON.parse(action.payload);
    default:
      return state;
  }
};

export default currentRoomComments;
