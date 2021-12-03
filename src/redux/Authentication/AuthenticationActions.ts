/* eslint-disable import/no-extraneous-dependencies */

import { AnyAction } from 'redux';
import { SET_AUTHENTICATED, SET_USER, User } from './Types';

const setAuthenticated = (payload: boolean): AnyAction => ({
  type: SET_AUTHENTICATED,
  payload,
});

const setUser = (payload: User): AnyAction => ({
  type: SET_USER,
  payload,
});

export { setAuthenticated, setUser };
