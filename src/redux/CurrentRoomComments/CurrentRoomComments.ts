import { AnyAction } from 'redux';
import { CommentOutputType } from 'src/firebaseAPI/Types';
import { SET_ROOM_COMMENTS } from './Types';

const initialState: CommentOutputType[] = [];

const currentRoomComments = (
  state: CommentOutputType[] = initialState,
  action: AnyAction
): CommentOutputType[] => {
  switch (action.type) {
    case SET_ROOM_COMMENTS:
      return JSON.parse(action.payload);
    default:
      return state;
  }
};

export default currentRoomComments;
