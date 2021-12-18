/* eslint-disable import/no-extraneous-dependencies */

import { AnyAction } from 'redux';
import ReviewState, { SET_REVIEW_SUBMITTING } from './Types';

const initialState = {
  submitting: false,
};

const review = (
  state: ReviewState = initialState,
  action: AnyAction
): ReviewState => {
  switch (action.type) {
    case SET_REVIEW_SUBMITTING:
      return {
        ...state,
        submitting: action.payload,
      };
    default:
      return state;
  }
};

export default review;
