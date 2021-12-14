/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import type { ReactElement } from 'react';
import firebaseAPI from '../firebaseAPI/firebaseAPI';

const CommentTest = (): ReactElement => {
  // console.log(firebaseAPI.getCommentsByRoomID('94uSjhZzhOdYdPaccnlL'));
  console.log(firebaseAPI.getCommentsByUID('gZvKuhNy9YgeDThAHr2xLapCFFT2'));
  // console.log(firebaseAPI.getImpressions('0L36vxMETKuBYt3i8BqU'));
  // firebaseAPI.removeLikeFromComment(
  //   'UcdZE32DFDnAPLFUtRrl',
  //   'test');
  return <span />;
}

export default CommentTest;