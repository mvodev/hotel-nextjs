type AuthenticationState = {
  isAuthenticated: boolean;
  user: User;
};

type User = {
  uid: string | null;
  name: string | null;
  surname: string | null;
};

const SET_AUTHENTICATED = 'SET-AUTHENTICATED';
const SET_USER = 'SET-USER';
const USER_AUTHENTICATE = 'USER-AUTHENTICATE';

export default AuthenticationState;
export type { User };
export { SET_AUTHENTICATED, SET_USER, USER_AUTHENTICATE };
