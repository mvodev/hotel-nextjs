type ReviewState = {
  isSubmitting: boolean;
  isReset: boolean;
};

const SUBMIT_REVIEW = 'SUBMIT-REVIEW';
const SET_REVIEW_SUBMITTING = 'SET-REVIEW-SUBMITTING';
const SET_REVIEW_FORM_RESET = 'SET-REVIEW-FORM-RESET';

export default ReviewState;
export { SUBMIT_REVIEW, SET_REVIEW_SUBMITTING, SET_REVIEW_FORM_RESET };
