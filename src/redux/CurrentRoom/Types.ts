import { ReturnedRoomType } from 'src/firebaseAPI/Types';

type CurrentRoomState = { isLoading: boolean } & ReturnedRoomType;

const SET_CURRENT_ROOM = 'SET-CURRENT-ROOM';
const GET_CURRENT_ROOM = 'GET-CURRENT-ROOM';
const SET_ROOM_LOADING = 'SET-ROOM-LOADING';

export default CurrentRoomState;
export { SET_CURRENT_ROOM, GET_CURRENT_ROOM, SET_ROOM_LOADING };
