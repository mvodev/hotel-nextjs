import type { FiltersAPIType } from '../../firebaseAPI/Types';
import { ReturnedRoomType } from "src/firebaseAPI/Types";
import { type } from 'os';

type StateType = {
  filters: FiltersAPIType;
}

type ActionType = {
  type: string;
  payload: number
}

type RoomsType = Array<ReturnedRoomType>

type initialStateType = {
  rooms: RoomsType;
}

type UpdateRoomsResultType = {
    rooms: RoomsType,
    esultsNumber: number,
    page: number,
    pagesNumber: number,
}

export type { StateType, ActionType, RoomsType, initialStateType, UpdateRoomsResultType }