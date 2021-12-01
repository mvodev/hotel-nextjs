import { AnyAction } from 'redux';

import HeaderState, {
  SET_USER_IN_HEADER
} from './Types';

const initialState = {
  isAuthorized: false,
  name: '',
  surname: '',
};

const HeaderReducer = (
  state: HeaderState = initialState,
  action: AnyAction
): SignInCardState => {
  switch (action.type) {
    case SET_USER_IN_HEADER:
      return {
        ...state,
        isAuthorized: true,
        name: action.payload.name,
        surname: action.payload.surname,
      };
    default:
      return state;
  }
};

export default HeaderReducer;
