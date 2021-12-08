import { AnyAction } from 'redux';

import PaginationState, { SET_PAGINATION } from './Types';

const setPagination = (payload: PaginationState): AnyAction => ({
  type: SET_PAGINATION,
  payload,
});

export default setPagination;
