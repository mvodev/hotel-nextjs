import { createSlice } from '@reduxjs/toolkit';

import type { AppState } from 'src/redux/Store';

type SearchRoomState = {
  responseStatus: boolean;
}

const initialState: SearchRoomState = {
  responseStatus: false
};

const SearchRoomSlice = createSlice({
  name: 'searchRoom',
  initialState,
  reducers: {
    switchResponseReadyStatus: (state) => {
      state.responseStatus = true;
    },
    switchResponseUnreadyStatus: (state) => {
      state.responseStatus = false;
    }
  },
});

export const {
  switchResponseReadyStatus,
  switchResponseUnreadyStatus
} = SearchRoomSlice.actions;

export const selectResponseStatus = (state: AppState): boolean => 
  state.searchRoom.responseStatus;

export default SearchRoomSlice.reducer;
