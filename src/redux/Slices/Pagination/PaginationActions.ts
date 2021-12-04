import { AnyAction } from 'redux';

import PaginationState, { SET_PAGINATION, SWITCH_PAGE } from './Types';

const switchPage = (payload: number): AnyAction => ({
  type: SWITCH_PAGE,
  payload,
});

const setPagination = (payload: PaginationState): AnyAction => ({
  type: SET_PAGINATION,
  payload,
});

export { switchPage, setPagination };
