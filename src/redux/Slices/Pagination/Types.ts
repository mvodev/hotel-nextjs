type PaginationState = {
  roomsOnPage?: number;
  pageCount: number;
  activePage: number;
  roomsCount: number;
};

const SWITCH_PAGE = 'SWITCH_PAGE';
const SET_PAGINATION = 'SET-PAGINATION';

export default PaginationState;
export { SWITCH_PAGE, SET_PAGINATION };
