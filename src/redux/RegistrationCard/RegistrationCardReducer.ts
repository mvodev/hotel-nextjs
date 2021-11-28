import { AnyAction } from 'redux';
import RegistrationCardState, { SET_SUBMITTING } from './Types';

const initialState = {
  submitting: false,
};

const registrationCardReducer = (
  state: RegistrationCardState = initialState,
  action: AnyAction
): RegistrationCardState => {
  console.log('inside registrationCardReducer');
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

export default registrationCardReducer;
