/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import type { ReactElement } from 'react';
import firebaseAPI from '../firebaseAPI/firebaseAPI';

const CommentTest = (): ReactElement => {
  console.log(firebaseAPI.getCommentsByUID('gZvKuhNy9YgeDThAHr2xLapCFFT2'));
  return <span />;
}

export default CommentTest;