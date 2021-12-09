/* eslint-disable no-console */
import type { ReactElement } from 'react';
import FiltersProps from 'src/components/Filters/FiltersProps';
import Layout from '../components/Layout';
import firebaseAPI from '../firebaseAPI/firebaseAPI';

const CommentTest = (): ReactElement => {
  console.log(firebaseAPI.addComment({
    uid:'',
    isLiked:false,
    text:'wow',
    roomID:'1',
  }));
  return <span>comment test</span>;
}

export default CommentTest;