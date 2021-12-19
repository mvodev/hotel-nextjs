/* eslint-disable import/no-extraneous-dependencies */

import { AnyAction } from 'redux';
import ReviewState, {
  SET_REVIEW_FORM_RESET,
  SET_REVIEW_SUBMITTING,
} from './Types';

const initialState = {
  isSubmitting: false,
  isReset: false,
};

const review = (
  state: ReviewState = initialState,
  action: AnyAction
): ReviewState => {
  switch (action.type) {
    case SET_REVIEW_SUBMITTING:
      return {
        ...state,
        isSubmitting: action.payload,
      };
    case SET_REVIEW_FORM_RESET:
      return {
        ...state,
        isReset: action.payload,
      };
    default:
      return state;
  }
};

export default review;
