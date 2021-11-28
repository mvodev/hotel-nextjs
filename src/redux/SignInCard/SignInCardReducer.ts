import { AnyAction } from 'redux';
import RegistrationCardState, { SET_SUBMITTING } from './Types';

const initialState = {
  submitting: false,
};

const signInCardReducer = (
  state: RegistrationCardState = initialState,
  action: AnyAction
): RegistrationCardState => {
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
