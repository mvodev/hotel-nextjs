import { AnyAction } from 'redux';
import SignInCardState, { SET_SUBMITTING } from './Types';

const initialState = {
  submitting: false,
};

const signInCardReducer = (
  state: SignInCardState = initialState,
  action: AnyAction
): SignInCardState => {
  switch (action.type) {
    case SET_SUBMITTING:
      return {
        ...state,
        submitting: action.payload,
      };
    default:
      return state;
  }
};

export default signInCardReducer;
