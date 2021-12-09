/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import type { ReactElement } from 'react';
import firebaseAPI from '../firebaseAPI/firebaseAPI';

const CommentTest = (): ReactElement => {
  // console.log(firebaseAPI.addComment({uid:'',isLiked:false,text:'wow',roomID:'1',}));
  const result  = firebaseAPI.getComments();
  console.log(result);
  return <span>comment test</span>;
}

export default CommentTest;