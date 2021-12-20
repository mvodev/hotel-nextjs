import { FirebaseError } from "@firebase/util";

type AuthenticationState = {
  isAuthenticated: boolean;
  user: User;
};

type User = {
  uid: string | null;
  name: string | null;
  surname: string | null;
  email: string | null;
};

type ResultType = {
  changed: boolean,
  error?: string | FirebaseError
}

const SET_AUTHENTICATED = 'SET-AUTHENTICATED';
const SET_USER = 'SET-USER';
const SET_USER_NAME = 'SET-USER_NAME';
const SET_USER_SURNAME = 'SET-USER_SURNAME';
const USER_LOG_OUT = 'USER-LOG-OUT';
const RESET_USER_DATA = 'RESET-USER-DATA';
const USER_AUTHENTICATE = 'USER-AUTHENTICATE';

export default AuthenticationState;
export type { User, ResultType };
export {
  SET_AUTHENTICATED,
  SET_USER,
  USER_AUTHENTICATE,
  USER_LOG_OUT,
  RESET_USER_DATA,
  SET_USER_NAME,
  SET_USER_SURNAME,
};
