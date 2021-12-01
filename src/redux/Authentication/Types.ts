type AuthenticationState = {
  isAuthenticated: boolean;
  uid: string;
  name: string;
  surname: string;
};

const SET_AUTHENTICATED = 'SET-AUTHENTICATED';
const SET_UID = 'SET-UID';
const SET_NAME = 'SET-NAME';
const SET_SURNAME = 'SET_SURNAME';

export default AuthenticationState;
export { SET_AUTHENTICATED, SET_UID, SET_NAME, SET_SURNAME };
