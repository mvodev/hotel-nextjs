import { ReturnedRoomType } from 'src/firebaseAPI/Types';

type CurrentRoomState = {
  isLoading: boolean;
  isBookBlock: boolean;
} & ReturnedRoomType;

const SET_ROOM_COMMENTS = 'SET-ROOM-COMMENTARIES';

export default CurrentRoomState;
export { SET_ROOM_COMMENTS };
