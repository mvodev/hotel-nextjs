const SET_USER_IN_HEADER = 'SET_USER_IN_HEADER';

type HeaderState = {
  isAuthorized: boolean;
  name: string;
  surname: string;
};

export default HeaderState;
export { SET_USER_IN_HEADER };
