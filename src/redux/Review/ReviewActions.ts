import { AnyAction } from 'redux';
import { SET_REVIEW_SUBMITTING } from './Types';

const setReviewSubmitting = (payload: boolean): AnyAction => ({
  type: SET_REVIEW_SUBMITTING,
  payload,
});

export { setReviewSubmitting };
