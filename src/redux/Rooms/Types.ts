import { ReturnedRoomType } from "src/firebaseAPI/Types";

import type { FiltersAPIType } from '../../firebaseAPI/Types';

type StateType = {
  filters: FiltersAPIType;
  rooms: { rooms: RoomsType };
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
    resultsNumber: number,
    page: number,
    pagesNumber: number,
}

export type { StateType, ActionType, RoomsType, initialStateType, UpdateRoomsResultType }