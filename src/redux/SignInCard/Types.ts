const SET_SUBMITTING = 'SET-SUBMITTING';
const SUBMIT_SIGN_IN_FORM = 'SUBMIT_SIGN_IN_FORM';
const SET_UID = 'SET_UID';
const SET_ERROR = 'SET_ERROR';

type SignInCardState = {
  submitting: boolean;
  email: string;
  password: string;
  uid: string;
  error: boolean;
};

export default SignInCardState;
export { SET_SUBMITTING, SUBMIT_SIGN_IN_FORM, SET_UID, SET_ERROR };
