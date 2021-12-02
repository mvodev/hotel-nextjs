/* eslint-disable import/no-extraneous-dependencies */

import { AnyAction } from 'redux';
import { SET_AUTHENTICATED, SET_UID } from './Types';

const setAuthenticated = (payload: boolean): AnyAction => ({
  type: SET_AUTHENTICATED,
  payload,
});

const setUID = (payload: string): AnyAction => ({
  type: SET_UID,
  payload,
});

export { setAuthenticated, setUID };
