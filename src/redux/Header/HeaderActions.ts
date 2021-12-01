import { AnyAction } from 'redux';
import HeaderState, {
  SET_USER_IN_HEADER
} from './Types';

const setUserInHeader = (payload: HeaderState): AnyAction => ({
  type: SET_USER_IN_HEADER,
  payload,
});

export default setUserInHeader;
