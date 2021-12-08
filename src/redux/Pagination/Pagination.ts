import { AnyAction } from 'redux';

import PaginationState, { SET_PAGINATION } from './Types';

const initialState = {
  roomsOnPage: 12,
  pageCount: 15,
  activePage: 1,
  roomsCount: 180,
};

const Pagination = (
  state: PaginationState = initialState,
  action: AnyAction
): PaginationState => {
  switch (action.type) {
    case SET_PAGINATION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default Pagination;
