const SET_SUBMITTING = 'SET-SUBMITTING';
const SUBMIT_SIGN_IN_FORM = 'SUBMIT_SIGN_IN_FORM';
const SET_UID = 'SET_UID';
const SET_EMAIL = 'SET_EMAIL';
const SET_ERROR = 'SET_ERROR';
const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
const SET_AUTHENTICATION_SUCCESS = 'SET_AUTHENTICATION_SUCCESS';

type SignInCardState = {
  submitting: boolean;
  email: string;
  password: string;
  uid: string;
  error: boolean;
  isAuthenticated:boolean;
  success:boolean;
};

export default SignInCardState;
export { SET_SUBMITTING,
  SUBMIT_SIGN_IN_FORM,
  SET_UID, SET_ERROR,
  SET_AUTHENTICATED,
  SET_AUTHENTICATION_SUCCESS,
  SET_EMAIL
};
